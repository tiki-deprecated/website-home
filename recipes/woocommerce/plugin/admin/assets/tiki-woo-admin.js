(function ($) {
    'use strict';

    $('.color-picker').wpColorPicker();

    $('body').on('click', '.tiki-img-upload', function (event) {
        event.preventDefault();

        const button = $(this)
        const imageId = button.next().next().val();
        const customUploader = wp.media({
            title: 'Insert image',
            library: {
                type: 'image'
            },
            button: {
                text: 'Use this image'
            },
            multiple: false
        }).on('select', function () {
            const attachment = customUploader.state().get('selection').first().toJSON();
            button.removeClass('button').html('<img style="max-width:300px;max-height:86px" src="' + attachment.url + '"><br />');
            button.next().next().show();
            button.next().next().val(attachment.id);
            button.blur()
        })

        // already selected images
        customUploader.on('open', function () {

            if (imageId) {
                const selection = customUploader.state().get('selection')
                let attachment = wp.media.attachment(imageId);
                attachment.fetch();
                selection.add(attachment ? [attachment] : []);
            }

        })

        customUploader.open()

    });

    $('body').on('click', '.tiki-img-remove', function (event) {
        event.preventDefault();
        const button = $(this);
        button.next().val('');
        button.hide().prev().prev().addClass('button').html('Upload image');
    });
})(jQuery);
