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

/* more_info/moreinfo.html.twig */
class __TwigTemplate_6f5bd1c9181c09ef4c3e60bcf47fe1f4e0d8e6949e65d11db18ab26f0ca8fad9 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "more_info/moreinfo.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "more_info/moreinfo.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "more_info/moreinfo.html.twig", 1);
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
        echo "<div class=\"Table ListPerson\">
    <div class=\"divTableBody\">
        <div class=\"divTableRow\">
            <div class=\"cell\">
                ";
        // line 8
        if ((isset($context["listPerson"]) || array_key_exists("listPerson", $context))) {
            // line 9
            echo "                    <div class=\"Table ListPerson\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Nom</div>
                                <div class=\"cell\">Prenom</div>
                            </div>
                            ";
            // line 15
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["listPerson"]) || array_key_exists("listPerson", $context) ? $context["listPerson"] : (function () { throw new RuntimeError('Variable "listPerson" does not exist.', 15, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["Person"]) {
                // line 16
                echo "                                ";
                if ((twig_length_filter($this->env, $context["Person"]) > 1)) {
                    // line 17
                    echo "                                    <div class=\"divTableRow\">
                                        <div class = \"cell Info\"> ";
                    // line 18
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Person"], 0, [], "array", false, false, false, 18), "html", null, true);
                    echo " </div>
                                        <div class = \"cell Info\"> ";
                    // line 19
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Person"], 1, [], "array", false, false, false, 19), "html", null, true);
                    echo " </div>
                                    </div>
                                ";
                }
                // line 22
                echo "                            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['Person'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 23
            echo "                        </div>
                    </div>
                ";
        }
        // line 26
        echo "            </div>
            <div class=\"cell\">
                <div class=\"Table\">
                    <div class=\"divTableBody\">
                        <div class=\"divTableRow\">
                            <div class=\"cell\">Date</div>
                            <div class=\"cell\">";
        // line 32
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["listSessionInfo"]) || array_key_exists("listSessionInfo", $context) ? $context["listSessionInfo"] : (function () { throw new RuntimeError('Variable "listSessionInfo" does not exist.', 32, $this->source); })()), 0, [], "array", false, false, false, 32), "html", null, true);
        echo "</div>
                        </div>
                        <div class=\"divTableRow\">
                            <div class=\"cell\">Time</div>
                            <div class=\"cell\">";
        // line 36
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["listSessionInfo"]) || array_key_exists("listSessionInfo", $context) ? $context["listSessionInfo"] : (function () { throw new RuntimeError('Variable "listSessionInfo" does not exist.', 36, $this->source); })()), 1, [], "array", false, false, false, 36), "html", null, true);
        echo "</div>
                        </div>
                        <div class=\"divTableRow\">
                            <div class=\"cell\">Bike Free</div>
                            <div class=\"cell\">";
        // line 40
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["listSessionInfo"]) || array_key_exists("listSessionInfo", $context) ? $context["listSessionInfo"] : (function () { throw new RuntimeError('Variable "listSessionInfo" does not exist.', 40, $this->source); })()), 2, [], "array", false, false, false, 40), "html", null, true);
        echo "</div>
                        </div>
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
        return "more_info/moreinfo.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  137 => 40,  130 => 36,  123 => 32,  115 => 26,  110 => 23,  104 => 22,  98 => 19,  94 => 18,  91 => 17,  88 => 16,  84 => 15,  76 => 9,  74 => 8,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block body %}
<div class=\"Table ListPerson\">
    <div class=\"divTableBody\">
        <div class=\"divTableRow\">
            <div class=\"cell\">
                {% if listPerson is defined %}
                    <div class=\"Table ListPerson\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Nom</div>
                                <div class=\"cell\">Prenom</div>
                            </div>
                            {% for Person in listPerson %}
                                {% if  Person|length > 1 %}
                                    <div class=\"divTableRow\">
                                        <div class = \"cell Info\"> {{ Person[0] }} </div>
                                        <div class = \"cell Info\"> {{ Person[1] }} </div>
                                    </div>
                                {% endif %}
                            {% endfor %}
                        </div>
                    </div>
                {% endif %}
            </div>
            <div class=\"cell\">
                <div class=\"Table\">
                    <div class=\"divTableBody\">
                        <div class=\"divTableRow\">
                            <div class=\"cell\">Date</div>
                            <div class=\"cell\">{{ listSessionInfo[0] }}</div>
                        </div>
                        <div class=\"divTableRow\">
                            <div class=\"cell\">Time</div>
                            <div class=\"cell\">{{ listSessionInfo[1] }}</div>
                        </div>
                        <div class=\"divTableRow\">
                            <div class=\"cell\">Bike Free</div>
                            <div class=\"cell\">{{ listSessionInfo[2] }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
", "more_info/moreinfo.html.twig", "/Users/victorsmits/Dropbox/ECAM/MIN 4/Web-Architecture/Project/AquaBike_Session/templates/more_info/moreinfo.html.twig");
    }
}
