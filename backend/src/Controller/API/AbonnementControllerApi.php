<?php

namespace App\Controller\API;

use App\Entity\Inscription;
use App\Entity\LienPersonTypeSession;
use App\Entity\Payement;
use App\Entity\Person;
use App\Entity\Session;
use DateTime;
use Doctrine\ORM\ORMException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
*@Route("/api/admin", methods={"POST","OPTIONS","GET"})
 */
class AbonnementControllerApi extends AbstractController
{
    /**
     * @Route("/abonnement", name="api_abonnement", methods={"GET ","HEAD"})
     */
    public function index()
    {
        $em = $this->getDoctrine()->getManager();
        $listAbo = $em->getRepository('App:Person')->findAll();

        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context){
                return $object->getId();
            },
            ObjectNormalizer::CIRCULAR_REFERENCE_LIMIT =>0,
            AbstractNormalizer::IGNORED_ATTRIBUTES =>['idInscription',
                'plainPassword','Password','salt','sessions','idTypeSession','__cloner__',
                '__initializer__','__isInitialized__'],
            ObjectNormalizer::ENABLE_MAX_DEPTH => true,
            DateTimeNormalizer::FORMAT_KEY => 'Y/m/d H:i'
        ];

        $encoders = array(new JsonEncode());
        $normalizers = array(new DateTimeNormalizer(),new ObjectNormalizer());
        $serializer = new Serializer($normalizers,$encoders);

        $jsonSessions = $serializer->serialize($listAbo, 'json',$defaultContext);
        $Sessions = new JsonResponse();
        $Sessions->setContent($jsonSessions);
        return $Sessions;
    }


    /**
     * @Route("/renewAbo", name="api_renew", methods={"PUT","OPTIONS"})
     * @param Request $request
     * @param RegistrationControllerApi $sub
     * @return JsonResponse
     */
    public function RenewAbo(Request $request,RegistrationControllerApi $sub){

        /**
         * @var $user Person
         * @var $type LienPersonTypeSession
         */
        try{
            $em = $this->getDoctrine()->getManager();
            $data = json_decode($request->getContent(), true);
            $user = $em
                ->getRepository('App:Person')
                ->find($data["Id"]);

            $user->setAbonnement($user->getAboType());

            $em->persist($user);
            $em->flush();

            $types = $em
                ->getRepository('App:LienPersonTypeSession')
                ->findBy(['IdPerson'=>$user]);

            $listIdType = [];

            foreach ($types as $type){
                array_push($listIdType,$type->getIdTypeSession()->getId());
            }

            $sub->autoSub($listIdType,$user);

            $em->persist($user);
            $em->flush();

            return new JsonResponse(['result'=>true]);

        }catch (\Exception $e){
            $error = $e;
        }
        return new JsonResponse(['error'=>$error]);
    }

    /**
     * @Route("/editAbo", name="api_editAbo", methods={"PUT","HEAD"})
     * @param Request $request
     * @return JsonResponse
     */
    public function editAbo(Request $request){
        try{
            $em = $this->getDoctrine()->getManager();
            $data = json_decode($request->getContent(), true);
            $user = $em
                ->getRepository('App:Person')
                ->find($data["Id"]);

            $user->setAboType($data["aboType"]);
            $em->persist($user);
            $em->flush();

            return new JsonResponse(['result'=>true]);

        }catch (\Exception $e){
            $error = $e;
        }
        return new JsonResponse(['error'=>$error]);
    }

    /**
     * @Route("/user/{id?}", name="api_delAbo", methods={"DELETE","OPTIONS"})
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function delAbo(Request $request,$id){
        try{

            /**
             * @var $user Person
             * @var $inscription Inscription
             * @var $session Session
             */
            $em = $this->getDoctrine()->getManager();
            $user = $em->getRepository('App:Person')->find($id);

            $Inscriptions = $user->getIdInscription()->toArray();

            foreach ($Inscriptions as $inscription){
                $session = $inscription->getIdSession();

                $session->setBike($session->getBike()+1);

                $em->remove($inscription);
                $em->flush();
            }

            $Ltps = $user->getIdTypeSession()->toArray();

            foreach ($Ltps as $ltp){
                $em->remove($ltp);
                $em->flush();
            }

            $em->remove($user);
            $em->flush();

            return new JsonResponse(['result'=>true]);
        }catch (ORMException $e){
            return new JsonResponse(['error'=>$e->getMessage()]);
        }
    }

    /**
     * @Route("/pay", name="api_pay", methods={"POST","OPTIONS"})
     * @param Request $request
     * @param RegistrationControllerApi $sub
     * @return JsonResponse
     * @throws \Exception
     */
    public function AddPayment(Request $request,RegistrationControllerApi $sub){
        $today = new DateTime("now");
        $septembre = new DateTime("09/01/".$today->format("y"));
        $february = new DateTime("02/01/".$today->format("y"));
        date_add($february, date_interval_create_from_date_string("1 year"));
        /**
         * @var $user Person
         * @var $type LienPersonTypeSession
         */
        try{
            $em = $this->getDoctrine()->getManager();
            $data = json_decode($request->getContent(), true);
            $user = $em
                ->getRepository('App:Person')
                ->find($data["person_id"]);

            $user->setAbonnement($user->getAboType());

            $em->persist($user);
            $em->flush();

            $payment = new Payement();
            $payment->setAmount($data["amount"]);
            $payment->setType($data["type"]);
            $payment->setPerson($user);
            $payment->setStartDate($today);

            if(($today > $septembre) && ($today < $february) && !($today->format("m") == "1")){
                $payment->setEndDate($february);
            }elseif ($today->format("m") == "1"){
                $payment->setEndDate(new DateTime("02/01/".$today->format("y")));
            }
            else{
                $payment->setEndDate($septembre);
            }

            $em->persist($payment);
            $em->flush();

            return new JsonResponse(['result'=>true]);

        }catch (\Exception $e){
            $error = $e;
        }
        return new JsonResponse(['error'=>$error]);
    }
}
