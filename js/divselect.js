$(function () {
    /*input placeholder*/
    jQuery('[placeholder]').focus(function() {
        var input = jQuery(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = jQuery(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur().parents('form').submit(function() {
        jQuery(this).find('[placeholder]').each(function() {
            var input = jQuery(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
    /*头部收索*/
        
    $('.search').click(function(){
        if($('.index-input-a>p').html()=='主题'){
            window.location.href='theme_list.html';
        }else{
            window.location.href='yacht_list.html';
        }
    });

    $(".checkspan").bind("click", function () {
        var ul = $(this).siblings('ul')
        if (ul.is(":hidden")) {
            ul.slideDown('400', function () {
                $(this).find("li").bind("click", function () {
                    var selectLi = $(this).text();
                    $("#select1 a").text(selectLi);
                    $("#select1 ul").slideUp(40);
                })
                ul.mouseleave(function () {
                    $('#select1 ul').slideUp(40)
                });
            });
        } else {
            $(this).siblings('ul').slideUp(40)
        }
    });
    $(".checkspan2").bind("click", function () {
        var ul = $(this).siblings('ul')
        if (ul.is(":hidden")) {
            ul.slideDown('400', function () {
                $(this).find("li").bind("click", function () {
                    var selectLi = $(this).text();
                    $("#select2 a").text(selectLi);
                    $("#select2 ul").slideUp(40);
                })
                ul.mouseleave(function () {
                    $('#select2 ul').slideUp(40)
                });
            });
        } else {
            $(this).siblings('ul').slideUp(40)
        }

    });
    $(".index-input-a").bind("click", function () {
        var ul = $(this).siblings('ul')
        if (ul.is(":hidden")) {
            ul.slideDown('400', function () {
                $(this).find("li").bind("click", function () {
                    var selectLi = $(this).text();
                    $("#index-input-select a p").text(selectLi);
                    $("#index-input-select ul").slideUp(40);
                })
                ul.mouseleave(function () {
                    $('#index-input-select ul').slideUp(40)
                });
            });
        } else {
            $(this).siblings('ul').slideUp(40)
        }
    })
});


function EnterPress(e){
    var keycode=document.all?event.keyCode:e.which;
    if(keycode==13){
        $('.search').click();
    }

}