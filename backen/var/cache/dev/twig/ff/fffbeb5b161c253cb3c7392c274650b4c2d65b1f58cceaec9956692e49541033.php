<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* admin/admin.html.twig */
class __TwigTemplate_829d2e356d8a8072326d9829b91e1d70b44120710b7006542c62c8085cea0f70 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/admin.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/admin.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/admin.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 4
        echo "<div class=\"Center\">
    <div class=\"Table\">
        <div class=\"divTableBody\">
            <div class=\"divTableRow\">

                ";
        // line 10
        echo "                <div class=\"divTableRow\" style=\"text-align: center\">
                    <h2> ADMIN PANEL</h2>
                </div>

                ";
        // line 15
        echo "                <div class=\"divTableRow\">
                    <div class=\"cell AdminCell\">
                        <a href=\"";
        // line 17
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("session_administration");
        echo "\" class=\"BtnStyle Adminbtn\"> Cancel Session </a>
                    </div>
                </div>

                ";
        // line 22
        echo "                <div class=\"divTableRow\">
                    <div class=\"cell AdminCell\">
                        <a href=\"";
        // line 24
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("abonnement");
        echo "\" class=\"BtnStyle Adminbtn\"> Etats Abonement</a>
                    </div>
                </div>

                ";
        // line 29
        echo "                <div class=\"divTableRow\">
                    <div class=\"cell AdminCell\">
                        <a href=\"";
        // line 31
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("create_session");
        echo "\" class=\"BtnStyle Adminbtn\"> Add Session </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "admin/admin.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  107 => 31,  103 => 29,  96 => 24,  92 => 22,  85 => 17,  81 => 15,  75 => 10,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block body %}
<div class=\"Center\">
    <div class=\"Table\">
        <div class=\"divTableBody\">
            <div class=\"divTableRow\">

                {# Admin Panel Title #}
                <div class=\"divTableRow\" style=\"text-align: center\">
                    <h2> ADMIN PANEL</h2>
                </div>

                {#  Canceling Session #}
                <div class=\"divTableRow\">
                    <div class=\"cell AdminCell\">
                        <a href=\"{{ path('session_administration') }}\" class=\"BtnStyle Adminbtn\"> Cancel Session </a>
                    </div>
                </div>

                {#  Check Subscribtion #}
                <div class=\"divTableRow\">
                    <div class=\"cell AdminCell\">
                        <a href=\"{{ path('abonnement') }}\" class=\"BtnStyle Adminbtn\"> Etats Abonement</a>
                    </div>
                </div>

                {#  Adding Session #}
                <div class=\"divTableRow\">
                    <div class=\"cell AdminCell\">
                        <a href=\"{{ path('create_session') }}\" class=\"BtnStyle Adminbtn\"> Add Session </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

{% endblock %}
", "admin/admin.html.twig", "/Users/victorsmits/Dropbox/ECAM/MIN 4/Web-Architecture/Project/AquaBike_Session/templates/admin/admin.html.twig");
    }
}
