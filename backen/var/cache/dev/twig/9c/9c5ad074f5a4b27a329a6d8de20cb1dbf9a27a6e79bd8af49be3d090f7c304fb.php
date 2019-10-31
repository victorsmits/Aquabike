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

/* session_administration/SessionAdmin.html.twig */
class __TwigTemplate_7db7c4d418c70ee27ef0d1b836be6e4b40117d6078e22631abd9882d3c16bf48 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "session_administration/SessionAdmin.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "session_administration/SessionAdmin.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "session_administration/SessionAdmin.html.twig", 1);
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

        echo "Hello SessionAdministrationController!";
        
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
        echo "
<div class=\"Table\">
    <div class=\"divTableBody\">
        <div class=\"divTableRow\">
            ";
        // line 11
        echo "            <div class=\"cell\">
                <div class=\"Table\">
                    <div class=\"divTableBody\">
                        ";
        // line 15
        echo "                        <div class=\"divTableRow\">
                            ";
        // line 17
        echo "                            <div class=\"cell\">
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
                            ";
        // line 30
        echo "                            <div class=\"cell\">
                                <div class=\"Table\">
                                    <div class=\"divTableBody\">
                                        <div class=\"divTableRow\">
                                            <div class=\"cell\" style=\"width: 200px\">
                                                <h4>Month: </h4>
                                            </div>
                                            <form action=\"";
        // line 37
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("session_administration");
        echo "\" method=\"get\">
                                                <div class = \"cell\" style=\"width: 100px; float: left; padding: 5px 5px 0 5px;\">
                                                    <div class=\"\">
                                                        <select name=\"month\" onchange=\"this.form.submit()\">
                                                            ";
        // line 41
        $context["month"] = [0 => [0 => 1, 1 => "Janvier"], 1 => [0 => 2, 1 => "Févrié"], 2 => [0 => 3, 1 => "Mars"], 3 => [0 => 4, 1 => "Avril"], 4 => [0 => 5, 1 => "Mai"], 5 => [0 => 6, 1 => "Juin"], 6 => [0 => 7, 1 => "Juillet"], 7 => [0 => 8, 1 => "Aout"], 8 => [0 => 9, 1 => "Septembre"], 9 => [0 => 10, 1 => "Octrobre"], 10 => [0 => 11, 1 => "Novembre"], 11 => [0 => 12, 1 => "Decembre"]];
        // line 53
        echo "                                                            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["month"]) || array_key_exists("month", $context) ? $context["month"] : (function () { throw new RuntimeError('Variable "month" does not exist.', 53, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["m"]) {
            // line 54
            echo "                                                                ";
            if (((isset($context["Selected"]) || array_key_exists("Selected", $context) ? $context["Selected"] : (function () { throw new RuntimeError('Variable "Selected" does not exist.', 54, $this->source); })()) == twig_get_attribute($this->env, $this->source, $context["m"], 0, [], "array", false, false, false, 54))) {
                // line 55
                echo "                                                                    <option value=";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], 0, [], "array", false, false, false, 55), "html", null, true);
                echo " selected>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], 1, [], "array", false, false, false, 55), "html", null, true);
                echo "</option>
                                                                ";
            } else {
                // line 57
                echo "                                                                    <option value=";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], 0, [], "array", false, false, false, 57), "html", null, true);
                echo " >";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["m"], 1, [], "array", false, false, false, 57), "html", null, true);
                echo "</option>
                                                                ";
            }
            // line 59
            echo "                                                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['m'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 60
        echo "                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        ";
        // line 71
        echo "                        ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["listSession"]) || array_key_exists("listSession", $context) ? $context["listSession"] : (function () { throw new RuntimeError('Variable "listSession" does not exist.', 71, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["Session"]) {
            // line 72
            echo "                            <div class=\"divTableRow\">

                                ";
            // line 75
            echo "                                <div class=\"cell\">
                                    ";
            // line 77
            echo "                                    <div class=\"Table Month\">
                                        <div class=\"divTableBody\">
                                            ";
            // line 79
            if ((twig_get_attribute($this->env, $this->source, $context["Session"], 5, [], "array", false, false, false, 79) == 1)) {
                // line 80
                echo "                                            <div class=\"divTableRow Cancel\">
                                                ";
            } else {
                // line 82
                echo "                                                <div class=\"divTableRow\">
                                            ";
            }
            // line 84
            echo "                                                <div class = \"cell Info\"> ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 0, [], "array", false, false, false, 84), "html", null, true);
            echo " </div>
                                                <div class = \"cell Info\"> ";
            // line 85
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 1, [], "array", false, false, false, 85), "html", null, true);
            echo " </div>
                                                <div class = \"cell Info\"> ";
            // line 86
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 2, [], "array", false, false, false, 86), "html", null, true);
            echo " </div>
                                                ";
            // line 87
            if ((twig_get_attribute($this->env, $this->source, $context["Session"], 4, [], "array", false, false, false, 87) == 0)) {
                // line 88
                echo "                                                    <div class=\"cell Info\">Complete</div>
                                                ";
            } else {
                // line 90
                echo "                                                    <div class = \"cell Info\"> ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 3, [], "array", false, false, false, 90), "html", null, true);
                echo "</div>
                                                ";
            }
            // line 92
            echo "                                            </div>
                                        </div>
                                    </div>
                                </div>

                                ";
            // line 98
            echo "                                <div class=\"cell\">
                                    ";
            // line 100
            echo "                                    <div class=\"Table button\">
                                        <div class=\"divTableBody\">
                                            <div class=\"divTableRow\">

                                                ";
            // line 104
            if ((twig_get_attribute($this->env, $this->source, $context["Session"], 5, [], "array", false, false, false, 104) == 1)) {
                // line 105
                echo "                                                    ";
                // line 106
                echo "                                                    <div class=\"cell\">
                                                        <a href=\"";
                // line 107
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("recreate", ["id" => twig_get_attribute($this->env, $this->source, $context["Session"], 4, [], "array", false, false, false, 107)]), "html", null, true);
                echo "\"
                                                           class=\"BtnStyle InscriptionBtn\">
                                                            + Create
                                                        </a>
                                                    </div>

                                                    ";
                // line 114
                echo "                                                    <div class=\"cell\">
                                                        <a href=\"";
                // line 115
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("Delete", ["id" => twig_get_attribute($this->env, $this->source, $context["Session"], 4, [], "array", false, false, false, 115)]), "html", null, true);
                echo "\"
                                                           class=\"BtnStyle UnsubBtn\">
                                                            - Delete
                                                        </a>
                                                    </div>
                                                    ";
            } else {
                // line 121
                echo "                                                        ";
                // line 122
                echo "                                                        <div class=\"cell\">
                                                            <a href=\"";
                // line 123
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("Cancel", ["id" => twig_get_attribute($this->env, $this->source, $context["Session"], 4, [], "array", false, false, false, 123)]), "html", null, true);
                echo "\"
                                                               class=\"BtnStyle UnsubBtn\">
                                                                X Cancel
                                                            </a>
                                                        </div>
                                                ";
            }
            // line 129
            echo "


                                                ";
            // line 133
            echo "                                                <div class=\"cell\">
                                                    <a href=\"";
            // line 134
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("more_info", ["id" => twig_get_attribute($this->env, $this->source, $context["Session"], 4, [], "array", false, false, false, 134)]), "html", null, true);
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
        // line 144
        echo "                    </div>
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
        return "session_administration/SessionAdmin.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  309 => 144,  293 => 134,  290 => 133,  285 => 129,  276 => 123,  273 => 122,  271 => 121,  262 => 115,  259 => 114,  250 => 107,  247 => 106,  245 => 105,  243 => 104,  237 => 100,  234 => 98,  227 => 92,  221 => 90,  217 => 88,  215 => 87,  211 => 86,  207 => 85,  202 => 84,  198 => 82,  194 => 80,  192 => 79,  188 => 77,  185 => 75,  181 => 72,  176 => 71,  164 => 60,  158 => 59,  150 => 57,  142 => 55,  139 => 54,  134 => 53,  132 => 41,  125 => 37,  116 => 30,  102 => 17,  99 => 15,  94 => 11,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{#{% extends 'AdminNav.html.twig' %}#}
{% block title %}Hello SessionAdministrationController!{% endblock %}

{% block body %}

<div class=\"Table\">
    <div class=\"divTableBody\">
        <div class=\"divTableRow\">
            {#  Session Panel#}
            <div class=\"cell\">
                <div class=\"Table\">
                    <div class=\"divTableBody\">
                        {#  Heading Row #}
                        <div class=\"divTableRow\">
                            {# Heading Cell #}
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
                            {#  Month Selection Cell #}
                            <div class=\"cell\">
                                <div class=\"Table\">
                                    <div class=\"divTableBody\">
                                        <div class=\"divTableRow\">
                                            <div class=\"cell\" style=\"width: 200px\">
                                                <h4>Month: </h4>
                                            </div>
                                            <form action=\"{{ path('session_administration')}}\" method=\"get\">
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

                        {#  Session Row #}
                        {% for Session in listSession %}
                            <div class=\"divTableRow\">

                                {# Info Cell #}
                                <div class=\"cell\">
                                    {# Info Table #}
                                    <div class=\"Table Month\">
                                        <div class=\"divTableBody\">
                                            {% if  Session[5] == 1 %}
                                            <div class=\"divTableRow Cancel\">
                                                {% else %}
                                                <div class=\"divTableRow\">
                                            {% endif %}
                                                <div class = \"cell Info\"> {{ Session[0] }} </div>
                                                <div class = \"cell Info\"> {{ Session[1] }} </div>
                                                <div class = \"cell Info\"> {{ Session[2] }} </div>
                                                {% if Session[4] == 0 %}
                                                    <div class=\"cell Info\">Complete</div>
                                                {% else %}
                                                    <div class = \"cell Info\"> {{ Session[3] }}</div>
                                                {% endif %}
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

                                                {% if Session[5] == 1 %}
                                                    {# Button Create #}
                                                    <div class=\"cell\">
                                                        <a href=\"{{ path('recreate',{id : Session[4]}) }}\"
                                                           class=\"BtnStyle InscriptionBtn\">
                                                            + Create
                                                        </a>
                                                    </div>

                                                    {# Delete Create #}
                                                    <div class=\"cell\">
                                                        <a href=\"{{ path('Delete',{id : Session[4]}) }}\"
                                                           class=\"BtnStyle UnsubBtn\">
                                                            - Delete
                                                        </a>
                                                    </div>
                                                    {% else %}
                                                        {# Button Cancel #}
                                                        <div class=\"cell\">
                                                            <a href=\"{{ path('Cancel',{id : Session[4]}) }}\"
                                                               class=\"BtnStyle UnsubBtn\">
                                                                X Cancel
                                                            </a>
                                                        </div>
                                                {% endif %}



                                                {# Button Show More #}
                                                <div class=\"cell\">
                                                    <a href=\"{{ path('more_info',{id : Session[4]}) }}\" class=\"BtnStyle ShowMorBtn\">
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
            </div>
        </div>
    </div>
</div>
{% endblock %}
", "session_administration/SessionAdmin.html.twig", "/Users/victorsmits/Dropbox/ECAM/MIN 4/Web-Architecture/Project/AquaBike_Session/templates/session_administration/SessionAdmin.html.twig");
    }
}
