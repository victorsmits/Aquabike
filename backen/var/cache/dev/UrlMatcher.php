<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/api/admin/abonnement' => [[['_route' => 'api_abonnement', '_controller' => 'App\\Controller\\API\\AbonnementControllerApi::index'], null, ['GET' => 0, 'HEAD' => 1], null, false, false, null]],
        '/api/admin' => [[['_route' => 'api_admin', '_controller' => 'App\\Controller\\API\\AdminControllerApi::index'], null, null, null, false, false, null]],
        '/api/admin/session' => [[['_route' => 'api_create_session', '_controller' => 'App\\Controller\\API\\CreateSessionControllerApi::index'], null, null, null, false, false, null]],
        '/api/profile/edit' => [[['_route' => 'api_edit_profile', '_controller' => 'App\\Controller\\API\\EditProfileControllerApi::index'], null, null, null, false, false, null]],
        '/api' => [[['_route' => 'api_home', '_controller' => 'App\\Controller\\API\\HomeControllerApi::index'], null, ['GET' => 0], null, true, false, null]],
        '/api/profile' => [[['_route' => 'api_profile', '_controller' => 'App\\Controller\\API\\ProfileControllerApi::index'], null, null, null, false, false, null]],
        '/api/register' => [[['_route' => 'api_app_register', '_controller' => 'App\\Controller\\API\\RegistrationControllerApi::register'], null, null, null, false, false, null]],
        '/api/login' => [[['_route' => 'api_login', '_controller' => 'App\\Controller\\API\\SecurityControllerApi::login'], null, null, null, false, false, null]],
        '/api/logout' => [[['_route' => 'api_logout', '_controller' => 'App\\Controller\\API\\SecurityControllerApi::logout'], null, null, null, false, false, null]],
        '/admin/abonnement' => [[['_route' => 'abonnement', '_controller' => 'App\\Controller\\AbonnementController::index'], null, null, null, false, false, null]],
        '/admin' => [[['_route' => 'admin', '_controller' => 'App\\Controller\\AdminController::index'], null, null, null, false, false, null]],
        '/admin/session' => [[['_route' => 'create_session', '_controller' => 'App\\Controller\\CreateSessionController::index'], null, null, null, false, false, null]],
        '/profile/edit' => [[['_route' => 'edit_profile', '_controller' => 'App\\Controller\\EditProfileController::index'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'home', '_controller' => 'App\\Controller\\HomeController::index'], null, null, null, false, false, null]],
        '/profile' => [[['_route' => 'profile', '_controller' => 'App\\Controller\\ProfileController::index'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'app_register', '_controller' => 'App\\Controller\\RegistrationController::register'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'login', '_controller' => 'App\\Controller\\SecurityController::login'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'logout', '_controller' => 'App\\Controller\\SecurityController::logout'], null, null, null, false, false, null]],
        '/admin/month' => [[['_route' => 'session_administration', '_controller' => 'App\\Controller\\SessionAdministrationController::index'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/a(?'
                    .'|pi/(?'
                        .'|mo(?'
                            .'|nth(?:/([^/]++)(?:/([^/]++))?)?(*:216)'
                            .'|reinfo/([^/]++)(*:239)'
                        .')'
                        .'|Inscription/([^/]++)(*:268)'
                        .'|Desinscription/([^/]++)(*:299)'
                        .'|ProfileUnsub/([^/]++)(*:328)'
                        .'|admin/(?'
                            .'|month(?:/([^/]++))?(*:364)'
                            .'|recreate/([^/]++)(*:389)'
                            .'|Cancel/([^/]++)(*:412)'
                            .'|Delete/([^/]++)(*:435)'
                        .')'
                    .')'
                    .'|dmin/(?'
                        .'|re(?'
                            .'|new/([^/]++)(*:470)'
                            .'|create/([^/]++)(*:493)'
                        .')'
                        .'|Cancel/([^/]++)(*:517)'
                        .'|Delete/([^/]++)(*:540)'
                    .')'
                .')'
                .'|/mo(?'
                    .'|nth(?:/([^/]++))?(*:573)'
                    .'|reinfo/([^/]++)(*:596)'
                .')'
                .'|/Inscription/([^/]++)(*:626)'
                .'|/Desinscription/([^/]++)(*:658)'
                .'|/ProfileUnsub/([^/]++)(*:688)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_twig_error_test', '_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception::showAction'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception::cssAction'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        216 => [[['_route' => 'api_month', 'month' => null, 'error' => null, '_controller' => 'App\\Controller\\API\\MonthControllerApi::index'], ['month', 'error'], null, null, false, true, null]],
        239 => [[['_route' => 'api_moreinfo', '_controller' => 'App\\Controller\\API\\MoreInfoControllerApi::index'], ['id'], null, null, false, true, null]],
        268 => [[['_route' => 'api_Inscription', '_controller' => 'App\\Controller\\API\\MonthControllerApi::createInscription'], ['id'], null, null, false, true, null]],
        299 => [[['_route' => 'api_Unsub', '_controller' => 'App\\Controller\\API\\MonthControllerApi::removeInscription'], ['id'], null, null, false, true, null]],
        328 => [[['_route' => 'api_ProfileUnsub', '_controller' => 'App\\Controller\\API\\ProfileControllerApi::removeInscription'], ['id'], null, null, false, true, null]],
        364 => [[['_route' => 'api_session_administration', 'month' => null, '_controller' => 'App\\Controller\\API\\SessionAdministrationControllerApi::index'], ['month'], null, null, false, true, null]],
        389 => [[['_route' => 'api_recreate', '_controller' => 'App\\Controller\\API\\SessionAdministrationControllerApi::recreateSession'], ['id'], null, null, false, true, null]],
        412 => [[['_route' => 'api_Cancel', '_controller' => 'App\\Controller\\API\\SessionAdministrationControllerApi::cancelSession'], ['id'], null, null, false, true, null]],
        435 => [[['_route' => 'api_Delete', '_controller' => 'App\\Controller\\API\\SessionAdministrationControllerApi::deleteSession'], ['id'], null, null, false, true, null]],
        470 => [[['_route' => 'renew', '_controller' => 'App\\Controller\\AbonnementController::RenewAbo'], ['id'], null, null, false, true, null]],
        493 => [[['_route' => 'recreate', '_controller' => 'App\\Controller\\SessionAdministrationController::recreateSession'], ['id'], null, null, false, true, null]],
        517 => [[['_route' => 'Cancel', '_controller' => 'App\\Controller\\SessionAdministrationController::cancelSession'], ['id'], null, null, false, true, null]],
        540 => [[['_route' => 'Delete', '_controller' => 'App\\Controller\\SessionAdministrationController::deleteSession'], ['id'], null, null, false, true, null]],
        573 => [[['_route' => 'month', 'error' => null, '_controller' => 'App\\Controller\\MonthController::index'], ['error'], null, null, false, true, null]],
        596 => [[['_route' => 'more_info', '_controller' => 'App\\Controller\\MoreInfoController::index'], ['id'], null, null, false, true, null]],
        626 => [[['_route' => 'Inscription', '_controller' => 'App\\Controller\\MonthController::createInscription'], ['id'], null, null, false, true, null]],
        658 => [[['_route' => 'Unsub', '_controller' => 'App\\Controller\\MonthController::removeInscription'], ['id'], null, null, false, true, null]],
        688 => [
            [['_route' => 'ProfileUnsub', '_controller' => 'App\\Controller\\ProfileController::removeInscription'], ['id'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
