function rosetteCust() {
    /// lxu - 20150129 - hide profileId, debug and output until they are ready for consumption
    $('tbody.operation-params').children().filter(function() {
        return $.inArray($(this).children('td.code').text(), ['profileId', 'debug', 'output']) > -1;
    }).css('display', 'none');
    ////////////////////////

    /// lxu - some time - reformat resource names with /uri/style/endpoint
    $('ul#resources li.resource div.heading h2 a').each(function() {
        return $(this).text($(this).text().replace(/^/, '/').replace('_', '/'));
    });
    ////////////////////////
          
    /// lxu - 20150220 - make examples work
    $('.resource > .endpoints > .endpoint > .operations > .operation > .content > form.sandbox .code-example').each(function() {
        var resource = $(this).parentsUntil('resource').get(5).id.replace('resource_', '');
        $(this).find('ul[role="tablist"]').each(function() {
            $(this).attr('id', $(this).attr('id').replace('@@raascomp@@', resource));
            $(this).find('a[role="tab"]').each(function() {
                $(this).attr('id', $(this).attr('id').replace('@@raascomp@@', resource));
                $(this).attr('href', $(this).attr('href').replace('@@raascomp@@', resource));
                $(this).attr('aria-controls', $(this).attr('aria-controls').replace('@@raascomp@@', resource));
            });
        });
        $(this).find('div.tab-content').each(function() {
            $(this).attr('id', $(this).attr('id').replace('@@raascomp@@', resource));
            $(this).find('div[role="tabpanel"]').each(function() {
                $(this).attr('id', $(this).attr('id').replace('@@raascomp@@', resource));
                $(this).attr('aria-labelledby', $(this).attr('aria-labelledby').replace('@@raascomp@@', resource));
            });
        });
    });
          
          
    var setSampleData = function() {
        $($(this).parentsUntil($('li.operation')).last().find('form.sandbox textarea')[0]).val(
                  $(this).parent().parent().parent().find('div.tab-content > div.tab-pane[id="' + $(this).attr('aria-controls') + '"] code')[0].innerText)
    };

    $('.resource > .endpoints > .endpoint > .operations > .operation > .content > form.sandbox .code-example li.active > a').each(setSampleData);
    $('.resource > .endpoints > .endpoint > .operations > .operation > .content > form.sandbox .code-example li > a').each(function() {
            $(this).on('click', setSampleData);
    });
}
