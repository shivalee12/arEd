$(document).ready(function () {

    (function ($) {
        "use strict";


        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        // validate contactForm form
        $(function () {
            $('#contactForm').validate({
                rules: {
                    "entry.1022086369": {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    number: {
                        required: true,
                        minlength: 5
                    },
                    "entry.549682075": {
                        required: true,
                        email: true
                    },
                    "entry.886790186": {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    "entry.1022086369": {
                        required: "come on, you have a name, don't you?",
                        minlength: "your name must consist of at least 2 characters"
                    },
                    subject: {
                        required: "come on, you have a subject, don't you?",
                        minlength: "your subject must consist of at least 4 characters"
                    },
                    number: {
                        required: "come on, you have a number, don't you?",
                        minlength: "your Number must consist of at least 5 characters"
                    },
                    "entry.549682075": {
                        required: "that doesn't look like an email!"
                    },
                    "entry.886790186": {
                        required: "um...yea, you have to write something to send this form.",
                        minlength: "thats all? really?"
                    }
                },

                submitHandler: function (form) {
                    $.ajax({
                        url: "https://docs.google.com/forms/d/e/1FAIpQLSfA5gdAjLa9wAKWW_6LU8sj0EdsGRtEdMIrEY7tJFPssm4aBw/formResponse",
                        data: $(form).serialize(),
                        async: false,
                        cache: false,
                        type: "POST",
                        dataType: "xml",
                        crossDomain: true,

                        success: function(data){
                          window.location.replace("http://ared.co.in/");
                        },
                        error: function(data){
                            window.location.replace("http://ared.co.in/");
                            
                        }

                    });
                }
            })
        })

    })(jQuery)
})