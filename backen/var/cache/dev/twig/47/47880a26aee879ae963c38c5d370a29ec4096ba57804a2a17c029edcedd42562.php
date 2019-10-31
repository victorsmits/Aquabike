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

/* month/month.html.twig */
class __TwigTemplate_73c14d0dd74981b6372c405d8b85b45e1beac87a14e63b0da2db8aa4a80c27b2 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "month/month.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "month/month.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "month/month.html.twig", 1);
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
        echo "
    <div class=\"Table\">
        <div class=\"divTableBody\">

            <div class=\"divTableRow\">
                ";
        // line 10
        echo "                <div class=\"cell\">
                    <div class=\"Table Month\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class = \"cell Info\"> Day </div>
                                <div class = \"cell Info\"> Date </div>
                                <div class = \"cell Info\"> Time </div>
                                <div class = \"cell Info\"> Bike Free </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=\"cell\">
                    <div class=\"Table\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class=\"cell\" style=\"width: 200px\">
                                    <h4>Month: </h4>
                                </div>
                                ";
        // line 31
        echo "                                <form action=\"";
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("month");
        echo "\" method=\"get\">
                                    <div class = \"cell\" style=\"width: 100px; float: left; padding: 5px 5px 0 5px;\">
                                        <div class=\"\">
                                            <select name=\"month\" onchange=\"this.form.submit()\">
                                                ";
        // line 35
        $context["month"] = [0 => [0 => 1, 1 => "Janvier"], 1 => [0 => 2, 1 => "Févrié"], 2 => [0 => 3, 1 => "Mars"], 3 => [0 => 4, 1 => "Avril"], 4 => [0 => 5, 1 => "Mai"], 5 => [0 => 6, 1 => "Juin"], 6 => [0 => 7, 1 => "Juillet"], 7 => [0 => 8, 1 => "Aout"], 8 => [0 => 9, 1 => "Septembre"], 9 => [0 => 10, 1 => "Octrobre"], 10 => [0 => 11, 1 => "Novembre"], 11 => [0 => 12, 1 => "Decembre"]];
        // line 47
        echo "                                                ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["month"]) || array_key_exists("month", $context) ? $context["month"] : (function () { throw new RuntimeError('Variable "month" does not exist.', 47, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["m"]) {
            // line 48
            echo "                                                    ";
            if (((isset($context["Selected"]) || array_key_exists("Selected", $context) ? $context["Selected"] : (function () { throw new RuntimeError('Variable "Selected" does not exist.', 48, $this->source); })()) == twig_get_attribute($this->env, $this->source, $context["m"], 0, [], "array", false, false, false, 48))) {
                // line 49
                echo "                                                        <option value=";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], 0, [], "array", false, false, false, 49), "html", null, true);
                echo " selected>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], 1, [], "array", false, false, false, 49), "html", null, true);
                echo "</option>
                                                        ";
            } else {
                // line 51
                echo "                                                        <option value=";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], 0, [], "array", false, false, false, 51), "html", null, true);
                echo " >";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], 1, [], "array", false, false, false, 51), "html", null, true);
                echo "</option>
                                                    ";
            }
            // line 53
            echo "                                                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['m'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        echo "                                            </select>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        ";
        // line 66
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["listSession"]) || array_key_exists("listSession", $context) ? $context["listSession"] : (function () { throw new RuntimeError('Variable "listSession" does not exist.', 66, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["Session"]) {
            // line 67
            echo "            <div class=\"divTableRow\">
                ";
            // line 69
            echo "
                <div class=\"cell\">
                    ";
            // line 71
            if ( !(null === (isset($context["errormessage"]) || array_key_exists("errormessage", $context) ? $context["errormessage"] : (function () { throw new RuntimeError('Variable "errormessage" does not exist.', 71, $this->source); })()))) {
                // line 72
                echo "                        <div class=\"Table\">
                            <div class=\"divTableBody\">
                                <div class=\"divTableRow\">
                                    <div class=\"cell\" >
                                        <span class=\"error\">";
                // line 76
                echo twig_escape_filter($this->env, (isset($context["errormessage"]) || array_key_exists("errormessage", $context) ? $context["errormessage"] : (function () { throw new RuntimeError('Variable "errormessage" does not exist.', 76, $this->source); })()), "html", null, true);
                echo "</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ";
            }
            // line 82
            echo "                    ";
            // line 83
            echo "                    <div class=\"Table Month\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class = \"cell Info\"> ";
            // line 86
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 1, [], "array", false, false, false, 86), "html", null, true);
            echo " </div>
                                <div class = \"cell Info\"> ";
            // line 87
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 2, [], "array", false, false, false, 87), "html", null, true);
            echo " </div>
                                <div class = \"cell Info\"> ";
            // line 88
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 3, [], "array", false, false, false, 88), "html", null, true);
            echo " </div>
                                ";
            // line 89
            if ((twig_get_attribute($this->env, $this->source, $context["Session"], 6, [], "array", false, false, false, 89) == 0)) {
                // line 90
                echo "                                    <div class = \"cell Info\"> ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 4, [], "array", false, false, false, 90), "html", null, true);
                echo "</div>
                                    ";
            } else {
                // line 92
                echo "                                        <div class = \"cell Info\"> CANCEL </div>
                                ";
            }
            // line 94
            echo "
                            </div>
                        </div>
                    </div>

                </div>
                <div class=\"cell\">

                    ";
            // line 103
            echo "                    <div class=\"Table button\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">

                                <div class=\"cell\">
                                    ";
            // line 108
            if (twig_get_attribute($this->env, $this->source, $context["Session"], 0, [], "array", false, false, false, 108)) {
                // line 109
                echo "
                                        ";
                // line 111
                echo "                                        <a href=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("Unsub", ["id" => twig_get_attribute($this->env, $this->source, $context["Session"], 5, [], "array", false, false, false, 111)]), "html", null, true);
                echo "\"
                                           class=\"BtnStyle UnsubBtn\">
                                            X Desinscription
                                        </a>

                                    ";
            } elseif ((twig_get_attribute($this->env, $this->source,             // line 116
$context["Session"], 6, [], "array", false, false, false, 116) == 1)) {
                // line 117
                echo "                                        <div class=\"BtnStyle UnsubBtn\">
                                            CANCEL
                                        </div>

                                    ";
            } elseif (((twig_get_attribute($this->env, $this->source,             // line 121
$context["Session"], 4, [], "array", false, false, false, 121) == 0) && (twig_get_attribute($this->env, $this->source, $context["Session"], 6, [], "array", false, false, false, 121) == 0))) {
                // line 122
                echo "                                        <div class=\"CompleteTag\">
                                            Complete
                                        </div>

                                    ";
            } else {
                // line 127
                echo "                                        <a href=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("Inscription", ["id" => twig_get_attribute($this->env, $this->source, $context["Session"], 5, [], "array", false, false, false, 127)]), "html", null, true);
                echo "\"
                                           class=\"BtnStyle InscriptionBtn\">
                                            + Inscription
                                        </a>
                                    ";
            }
            // line 132
            echo "
                                </div>

                                ";
            // line 136
            echo "                                <div class=\"cell\">
                                    <a href=\"";
            // line 137
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("more_info", ["id" => twig_get_attribute($this->env, $this->source, $context["Session"], 5, [], "array", false, false, false, 137)]), "html", null, true);
            echo "\" class=\"BtnStyle ShowMorBtn\">
                                        Show More
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
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['Session'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 148
        echo "
        </div>
    </div>

";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "month/month.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  292 => 148,  275 => 137,  272 => 136,  267 => 132,  258 => 127,  251 => 122,  249 => 121,  243 => 117,  241 => 116,  232 => 111,  229 => 109,  227 => 108,  220 => 103,  210 => 94,  206 => 92,  200 => 90,  198 => 89,  194 => 88,  190 => 87,  186 => 86,  181 => 83,  179 => 82,  170 => 76,  164 => 72,  162 => 71,  158 => 69,  155 => 67,  151 => 66,  137 => 54,  131 => 53,  123 => 51,  115 => 49,  112 => 48,  107 => 47,  105 => 35,  97 => 31,  75 => 10,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block body %}

    <div class=\"Table\">
        <div class=\"divTableBody\">

            <div class=\"divTableRow\">
                {# Heading Table #}
                <div class=\"cell\">
                    <div class=\"Table Month\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class = \"cell Info\"> Day </div>
                                <div class = \"cell Info\"> Date </div>
                                <div class = \"cell Info\"> Time </div>
                                <div class = \"cell Info\"> Bike Free </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=\"cell\">
                    <div class=\"Table\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class=\"cell\" style=\"width: 200px\">
                                    <h4>Month: </h4>
                                </div>
                                {# Month selection #}
                                <form action=\"{{ path('month')}}\" method=\"get\">
                                    <div class = \"cell\" style=\"width: 100px; float: left; padding: 5px 5px 0 5px;\">
                                        <div class=\"\">
                                            <select name=\"month\" onchange=\"this.form.submit()\">
                                                {% set month = [[01,'Janvier'],
                                                                [02,'Févrié'],
                                                                [03,'Mars'],
                                                                [04,'Avril'],
                                                                [05,'Mai'],
                                                                [06,'Juin'],
                                                                [07,'Juillet'],
                                                                [08,'Aout'],
                                                                [09,'Septembre'],
                                                                [10,'Octrobre'],
                                                                [11,'Novembre'],
                                                                [12,'Decembre']] %}
                                                {% for m in month %}
                                                    {% if Selected == m[0] %}
                                                        <option value={{  m[0] }} selected>{{  m[1] }}</option>
                                                        {% else %}
                                                        <option value={{  m[0] }} >{{  m[1] }}</option>
                                                    {% endif %}
                                                {% endfor %}
                                            </select>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        {% for Session in listSession %}
            <div class=\"divTableRow\">
                {# Info Cell #}

                <div class=\"cell\">
                    {% if errormessage is not null %}
                        <div class=\"Table\">
                            <div class=\"divTableBody\">
                                <div class=\"divTableRow\">
                                    <div class=\"cell\" >
                                        <span class=\"error\">{{ errormessage }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {% endif %}
                    {# Info Table #}
                    <div class=\"Table Month\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class = \"cell Info\"> {{ Session[1] }} </div>
                                <div class = \"cell Info\"> {{ Session[2] }} </div>
                                <div class = \"cell Info\"> {{ Session[3] }} </div>
                                {% if Session[6] == 0 %}
                                    <div class = \"cell Info\"> {{ Session[4] }}</div>
                                    {% else %}
                                        <div class = \"cell Info\"> CANCEL </div>
                                {% endif %}

                            </div>
                        </div>
                    </div>

                </div>
                <div class=\"cell\">

                    {#  Button Table #}
                    <div class=\"Table button\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">

                                <div class=\"cell\">
                                    {% if Session[0] %}

                                        {# Button Desinscription #}
                                        <a href=\"{{ path('Unsub',{id : Session[5]}) }}\"
                                           class=\"BtnStyle UnsubBtn\">
                                            X Desinscription
                                        </a>

                                    {% elseif Session[6] == 1 %}
                                        <div class=\"BtnStyle UnsubBtn\">
                                            CANCEL
                                        </div>

                                    {% elseif Session[4] == 0 and Session[6] == 0 %}
                                        <div class=\"CompleteTag\">
                                            Complete
                                        </div>

                                    {% else %}
                                        <a href=\"{{ path('Inscription',{id : Session[5]}) }}\"
                                           class=\"BtnStyle InscriptionBtn\">
                                            + Inscription
                                        </a>
                                    {% endif %}

                                </div>

                                {# Button Inscription #}
                                <div class=\"cell\">
                                    <a href=\"{{ path('more_info',{id : Session[5]}) }}\" class=\"BtnStyle ShowMorBtn\">
                                        Show More
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

{% endblock %}", "month/month.html.twig", "/Users/victorsmits/Dropbox/ECAM/MIN 4/Web-Architecture/Project/AquaBike_Session/templates/month/month.html.twig");
    }
}
