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

/* abonnement/abonnement.html.twig */
class __TwigTemplate_1e40c9e894f5871c2165ca222c90a9c2b1ee007949ba725c50dc6cf0fa54283e extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "abonnement/abonnement.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "abonnement/abonnement.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "abonnement/abonnement.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Hello AbonnementController!";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "    <div class=\"Table\">
        <div class=\"divTableBody\">

            <div class=\"divTableRow\">

                ";
        // line 12
        echo "                <div class=\"cell\">
                    <div class=\"Table Month\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class = \"cell Info\"> Nom </div>
                                <div class = \"cell Info\"> Prenom </div>
                                <div class = \"cell Info\"> Emaim </div>
                                <div class = \"cell Info\"> Abonnement </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            ";
        // line 26
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["listPerson"]) || array_key_exists("listPerson", $context) ? $context["listPerson"] : (function () { throw new RuntimeError('Variable "listPerson" does not exist.', 26, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["persone"]) {
            // line 27
            echo "                <div class=\"divTableRow\">

                    ";
            // line 30
            echo "                    <div class=\"cell\">
                        ";
            // line 32
            echo "                        <div class=\"Table Month\">
                            <div class=\"divTableBody\">
                                <div class=\"divTableRow\">
                                    <div class = \"cell Info\"> ";
            // line 35
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["persone"], 0, [], "array", false, false, false, 35), "html", null, true);
            echo " </div>
                                    <div class = \"cell Info\"> ";
            // line 36
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["persone"], 1, [], "array", false, false, false, 36), "html", null, true);
            echo " </div>
                                    <div class = \"cell Info\"> ";
            // line 37
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["persone"], 2, [], "array", false, false, false, 37), "html", null, true);
            echo " </div>
                                    <div class = \"cell Info\"> ";
            // line 38
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["persone"], 3, [], "array", false, false, false, 38), "html", null, true);
            echo "</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    ";
            // line 46
            echo "                    <div class=\"cell\">
                        ";
            // line 48
            echo "                        <div class=\"Table button\">
                            <div class=\"divTableBody\">
                                <div class=\"divTableRow\">
                                    <div class=\"cell\">
                                        ";
            // line 53
            echo "                                        <a href=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("renew", ["id" => twig_get_attribute($this->env, $this->source, $context["persone"], 4, [], "array", false, false, false, 53)]), "html", null, true);
            echo "\"
                                           class=\"BtnStyle RenewBtn\">
                                            + Renouvellement
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['persone'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 64
        echo "
        </div>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "abonnement/abonnement.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  176 => 64,  158 => 53,  152 => 48,  149 => 46,  139 => 38,  135 => 37,  131 => 36,  127 => 35,  122 => 32,  119 => 30,  115 => 27,  111 => 26,  95 => 12,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello AbonnementController!{% endblock %}

{% block body %}
    <div class=\"Table\">
        <div class=\"divTableBody\">

            <div class=\"divTableRow\">

                {# Heading Cell #}
                <div class=\"cell\">
                    <div class=\"Table Month\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class = \"cell Info\"> Nom </div>
                                <div class = \"cell Info\"> Prenom </div>
                                <div class = \"cell Info\"> Emaim </div>
                                <div class = \"cell Info\"> Abonnement </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {% for persone in listPerson %}
                <div class=\"divTableRow\">

                    {# Info Cell #}
                    <div class=\"cell\">
                        {# Info Table #}
                        <div class=\"Table Month\">
                            <div class=\"divTableBody\">
                                <div class=\"divTableRow\">
                                    <div class = \"cell Info\"> {{ persone[0] }} </div>
                                    <div class = \"cell Info\"> {{ persone[1] }} </div>
                                    <div class = \"cell Info\"> {{ persone[2] }} </div>
                                    <div class = \"cell Info\"> {{ persone[3] }}</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {# Button Cell #}
                    <div class=\"cell\">
                        {#  Button Table #}
                        <div class=\"Table button\">
                            <div class=\"divTableBody\">
                                <div class=\"divTableRow\">
                                    <div class=\"cell\">
                                        {# Button Desinscription #}
                                        <a href=\"{{ path('renew',{id : persone[4]}) }}\"
                                           class=\"BtnStyle RenewBtn\">
                                            + Renouvellement
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {% endfor %}

        </div>
    </div>
{% endblock %}
", "abonnement/abonnement.html.twig", "/Users/victorsmits/Dropbox/ECAM/MIN 4/Web-Architecture/Project/AquaBike_Session/templates/abonnement/abonnement.html.twig");
    }
}
