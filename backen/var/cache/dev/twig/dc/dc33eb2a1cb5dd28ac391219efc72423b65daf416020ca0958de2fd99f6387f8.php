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

/* profile/Profile.html.twig */
class __TwigTemplate_61e8e6b3b8df1efb77265700431bed3c1fb7f9c7e8fa9e83b2641aa99fe54e6e extends \Twig\Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "profile/Profile.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "profile/Profile.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "profile/Profile.html.twig", 1);
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
        echo "    <div class=\"Table\">
        <div class=\"divTableBody\">
            <div class=\"divTableRow\">
                <div class=\"cell inscription\">
                    <div class=\"Table ListPerson\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                ";
        // line 12
        echo "                                <div class=\"Table Month\">
                                    <div class=\"divTableBody\">
                                        <div class=\"divTableRow\">
                                            <div class=\"cell Info\"> Day</div>
                                            <div class=\"cell Info\"> Date</div>
                                            <div class=\"cell Info\"> Time</div>
                                            <div class=\"cell Info\"> Bike Free</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ";
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["listSession"]) || array_key_exists("listSession", $context) ? $context["listSession"] : (function () { throw new RuntimeError('Variable "listSession" does not exist.', 23, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["Session"]) {
            // line 24
            echo "
                            <div class=\"divTableRow\">
                                ";
            // line 27
            echo "                                <div class=\"cell Profile\">
                                    ";
            // line 29
            echo "                                    <div class=\"Table Month\">
                                        <div class=\"divTableBody\">
                                            ";
            // line 32
            echo "                                            <div class=\"divTableRow\">
                                                <div class=\"cell Info\"> ";
            // line 33
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 0, [], "array", false, false, false, 33), "html", null, true);
            echo " </div>
                                                <div class=\"cell Info\"> ";
            // line 34
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 1, [], "array", false, false, false, 34), "html", null, true);
            echo " </div>
                                                <div class=\"cell Info\"> ";
            // line 35
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 2, [], "array", false, false, false, 35), "html", null, true);
            echo " </div>
                                                <div class=\"cell Info\"> ";
            // line 36
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["Session"], 3, [], "array", false, false, false, 36), "html", null, true);
            echo "</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ";
            // line 42
            echo "                                <div class=\"cell Profile\">
                                    ";
            // line 44
            echo "                                    <div class=\"Table button\">
                                        <div class=\"divTableBody\">
                                            <div class=\"divTableRow\">
                                                <div class=\"cell\">
                                                    ";
            // line 49
            echo "                                                    <a href=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("Unsub", ["id" => twig_get_attribute($this->env, $this->source, $context["Session"], 4, [], "array", false, false, false, 49)]), "html", null, true);
            echo "\"
                                                       class=\"BtnStyle UnsubBtn\">
                                                        X Desinscription
                                                    </a>
                                                </div>

                                                ";
            // line 56
            echo "                                                <div class=\"cell\">
                                                    <a href=\"";
            // line 57
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("more_info", ["id" => twig_get_attribute($this->env, $this->source, $context["Session"], 4, [], "array", false, false, false, 57)]), "html", null, true);
            echo "\"
                                                       class=\"BtnStyle ShowMorBtn\">
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
        // line 68
        echo "                        </div>
                    </div>
                </div>
                <div class=\"cell Profile\" style=\"\">
                    <div class=\"Table\" >
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Nom</div>
                                <div class=\"cell\">";
        // line 76
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["userInfo"]) || array_key_exists("userInfo", $context) ? $context["userInfo"] : (function () { throw new RuntimeError('Variable "userInfo" does not exist.', 76, $this->source); })()), 0, [], "array", false, false, false, 76), "html", null, true);
        echo "</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Prenom</div>
                                <div class=\"cell\">";
        // line 80
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["userInfo"]) || array_key_exists("userInfo", $context) ? $context["userInfo"] : (function () { throw new RuntimeError('Variable "userInfo" does not exist.', 80, $this->source); })()), 1, [], "array", false, false, false, 80), "html", null, true);
        echo "</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Email</div>
                                <div class=\"cell\">";
        // line 84
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["userInfo"]) || array_key_exists("userInfo", $context) ? $context["userInfo"] : (function () { throw new RuntimeError('Variable "userInfo" does not exist.', 84, $this->source); })()), 2, [], "array", false, false, false, 84), "html", null, true);
        echo "</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Abonnement</div>
                                <div class=\"cell\">";
        // line 88
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["userInfo"]) || array_key_exists("userInfo", $context) ? $context["userInfo"] : (function () { throw new RuntimeError('Variable "userInfo" does not exist.', 88, $this->source); })()), 3, [], "array", false, false, false, 88), "html", null, true);
        echo "</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Jour</div>
                                <div class=\"cell\">";
        // line 92
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["userInfo"]) || array_key_exists("userInfo", $context) ? $context["userInfo"] : (function () { throw new RuntimeError('Variable "userInfo" does not exist.', 92, $this->source); })()), 4, [], "array", false, false, false, 92), "html", null, true);
        echo "</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">
                                    <a href=\"";
        // line 96
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("edit_profile");
        echo "\"
                                       class=\"BtnStyle ShowMorBtn\">
                                        Edit Profile
                                    </a>
                                </div>
                                ";
        // line 101
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ADMIN")) {
            // line 102
            echo "                                <div class=\"cell\">
                                    <a href=\"";
            // line 103
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin");
            echo "\"
                                       class=\"BtnStyle ShowMorBtn\">
                                        Admin
                                    </a>
                                </div>
                                ";
        }
        // line 109
        echo "
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
        return "profile/Profile.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  234 => 109,  225 => 103,  222 => 102,  220 => 101,  212 => 96,  205 => 92,  198 => 88,  191 => 84,  184 => 80,  177 => 76,  167 => 68,  150 => 57,  147 => 56,  137 => 49,  131 => 44,  128 => 42,  120 => 36,  116 => 35,  112 => 34,  108 => 33,  105 => 32,  101 => 29,  98 => 27,  94 => 24,  90 => 23,  77 => 12,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block body %}
    <div class=\"Table\">
        <div class=\"divTableBody\">
            <div class=\"divTableRow\">
                <div class=\"cell inscription\">
                    <div class=\"Table ListPerson\">
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                {# Heading Table #}
                                <div class=\"Table Month\">
                                    <div class=\"divTableBody\">
                                        <div class=\"divTableRow\">
                                            <div class=\"cell Info\"> Day</div>
                                            <div class=\"cell Info\"> Date</div>
                                            <div class=\"cell Info\"> Time</div>
                                            <div class=\"cell Info\"> Bike Free</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {% for Session in listSession %}

                            <div class=\"divTableRow\">
                                {# Info Cell #}
                                <div class=\"cell Profile\">
                                    {# Info Table #}
                                    <div class=\"Table Month\">
                                        <div class=\"divTableBody\">
                                            {#  Info row #}
                                            <div class=\"divTableRow\">
                                                <div class=\"cell Info\"> {{ Session[0] }} </div>
                                                <div class=\"cell Info\"> {{ Session[1] }} </div>
                                                <div class=\"cell Info\"> {{ Session[2] }} </div>
                                                <div class=\"cell Info\"> {{ Session[3] }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {# Button Cell #}
                                <div class=\"cell Profile\">
                                    {#  Button Table #}
                                    <div class=\"Table button\">
                                        <div class=\"divTableBody\">
                                            <div class=\"divTableRow\">
                                                <div class=\"cell\">
                                                    {# Button Desinscription #}
                                                    <a href=\"{{ path('Unsub',{id : Session[4]}) }}\"
                                                       class=\"BtnStyle UnsubBtn\">
                                                        X Desinscription
                                                    </a>
                                                </div>

                                                {# Button Inscription #}
                                                <div class=\"cell\">
                                                    <a href=\"{{ path('more_info',{id : Session[4]}) }}\"
                                                       class=\"BtnStyle ShowMorBtn\">
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
                <div class=\"cell Profile\" style=\"\">
                    <div class=\"Table\" >
                        <div class=\"divTableBody\">
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Nom</div>
                                <div class=\"cell\">{{ userInfo[0] }}</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Prenom</div>
                                <div class=\"cell\">{{ userInfo[1] }}</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Email</div>
                                <div class=\"cell\">{{ userInfo[2] }}</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Abonnement</div>
                                <div class=\"cell\">{{ userInfo[3] }}</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">Jour</div>
                                <div class=\"cell\">{{ userInfo[4] }}</div>
                            </div>
                            <div class=\"divTableRow\">
                                <div class=\"cell\">
                                    <a href=\"{{ path('edit_profile') }}\"
                                       class=\"BtnStyle ShowMorBtn\">
                                        Edit Profile
                                    </a>
                                </div>
                                {% if is_granted('ROLE_ADMIN')  %}
                                <div class=\"cell\">
                                    <a href=\"{{ path('admin') }}\"
                                       class=\"BtnStyle ShowMorBtn\">
                                        Admin
                                    </a>
                                </div>
                                {% endif %}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
{% endblock %}", "profile/Profile.html.twig", "/Users/victorsmits/Dropbox/ECAM/MIN 4/Web-Architecture/Project/AquaBike_Session/templates/profile/Profile.html.twig");
    }
}
