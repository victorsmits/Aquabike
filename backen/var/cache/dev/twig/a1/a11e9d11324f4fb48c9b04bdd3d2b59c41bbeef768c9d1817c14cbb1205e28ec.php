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

/* home/home.html.twig */
class __TwigTemplate_165aef32694ac6b8efc26c1de0b658a5dd872046b0d8aca2cc4772f8a71f4720 extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/home.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/home.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "home/home.html.twig", 1);
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
        echo "    <div class=\"Position\">
        ";
        // line 5
        if ( !(isset($context["NoSession"]) || array_key_exists("NoSession", $context))) {
            // line 6
            echo "        <div class=\"day\"> ";
            echo twig_escape_filter($this->env, (isset($context["Date"]) || array_key_exists("Date", $context) ? $context["Date"] : (function () { throw new RuntimeError('Variable "Date" does not exist.', 6, $this->source); })()), "html", null, true);
            echo "</div>
        <div class=\"Session\">
            <div class=\"top\">
                <div class=\"time\"> ";
            // line 9
            echo twig_escape_filter($this->env, (isset($context["TimeTop"]) || array_key_exists("TimeTop", $context) ? $context["TimeTop"] : (function () { throw new RuntimeError('Variable "TimeTop" does not exist.', 9, $this->source); })()), "html", null, true);
            echo "</div>
                <div class=\"book\">
                    ";
            // line 11
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["listPersonTop"]) || array_key_exists("listPersonTop", $context) ? $context["listPersonTop"] : (function () { throw new RuntimeError('Variable "listPersonTop" does not exist.', 11, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["Person"]) {
                // line 12
                echo "                        <ul class=\"Session\"> ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Person"], 0, [], "array", false, false, false, 12), "html", null, true);
                echo " ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Person"], 1, [], "array", false, false, false, 12), "html", null, true);
                echo "</ul>
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['Person'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 14
            echo "                </div>
            </div>
            <div class=\"bottom\">
                <div class=\"time\"> ";
            // line 17
            echo twig_escape_filter($this->env, (isset($context["TimeBottom"]) || array_key_exists("TimeBottom", $context) ? $context["TimeBottom"] : (function () { throw new RuntimeError('Variable "TimeBottom" does not exist.', 17, $this->source); })()), "html", null, true);
            echo " </div>
                <div class=\"book\">
                    ";
            // line 19
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["listPersonBottom"]) || array_key_exists("listPersonBottom", $context) ? $context["listPersonBottom"] : (function () { throw new RuntimeError('Variable "listPersonBottom" does not exist.', 19, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["Person"]) {
                // line 20
                echo "                        <ul class=\"Session\"> ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Person"], 0, [], "array", false, false, false, 20), "html", null, true);
                echo " ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Person"], 1, [], "array", false, false, false, 20), "html", null, true);
                echo "</ul>
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['Person'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 22
            echo "                </div>
            </div>
        </div>
            ";
        } else {
            // line 26
            echo "            <h2>NO SESSION TODAY</h2>
        ";
        }
        // line 28
        echo "
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "home/home.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  135 => 28,  131 => 26,  125 => 22,  114 => 20,  110 => 19,  105 => 17,  100 => 14,  89 => 12,  85 => 11,  80 => 9,  73 => 6,  71 => 5,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block body %}
    <div class=\"Position\">
        {% if  NoSession is not defined %}
        <div class=\"day\"> {{ Date }}</div>
        <div class=\"Session\">
            <div class=\"top\">
                <div class=\"time\"> {{ TimeTop }}</div>
                <div class=\"book\">
                    {% for Person in listPersonTop %}
                        <ul class=\"Session\"> {{ Person[0] }} {{ Person[1] }}</ul>
                    {% endfor %}
                </div>
            </div>
            <div class=\"bottom\">
                <div class=\"time\"> {{ TimeBottom }} </div>
                <div class=\"book\">
                    {% for Person in listPersonBottom %}
                        <ul class=\"Session\"> {{ Person[0] }} {{ Person[1] }}</ul>
                    {% endfor %}
                </div>
            </div>
        </div>
            {% else %}
            <h2>NO SESSION TODAY</h2>
        {% endif  %}

    </div>
{% endblock %}
", "home/home.html.twig", "/Users/victorsmits/Dropbox/ECAM/MIN 4/Web-Architecture/Project/AquaBike_Session/templates/home/home.html.twig");
    }
}
