/*!
 * Akeeba Frontend Framework (FEF)
 *
 * @package   fef
 * @copyright (c) 2017-2023 Nicholas K. Dionysopoulos / Akeeba Ltd
 * @license   GNU General Public License version 3, or later
 */

window.akeeba     = window.akeeba || {};
window.akeeba.fef = window.akeeba.fef || {};

akeeba.fef.darkMode = function (status)
{
    if (status == null)
    {
        status = true;
    }

    var elNodes = document.querySelectorAll(".akeeba-renderer-fef");

    for (var i = 0; i < elNodes.length; i++)
    {
        var elNode         = elNodes[i];
        var currentClasses = elNode.className.split(" ");
        elNode.className   = "";

        for (var j = 0; j < currentClasses.length; j++)
        {
            var thisClass = currentClasses[j];

            if (thisClass === "akeeba-renderer-fef--dark")
            {
                continue;
            }

            elNode.className += " " + thisClass;
        }

        if (status)
        {
            elNode.className += " akeeba-renderer-fef--dark";
        }

        if (elNode.className.trim)
        {
            elNode.className = elNode.className.trim();
        }
    }
};