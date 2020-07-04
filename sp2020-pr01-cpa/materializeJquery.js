$(document).ready(function () {
    $('.sidenav').sidenav()
    $('.datepicker').datepicker({
        format: 'dd-mm-yyyy'
    });
    $('input.autocomplete-start').autocomplete({
        data: {
            "Skopje": null, "Veles": null, "Demir Kapija": null, "Kavadarci": null, "Negotino": null, "Sveti Nikole": null, "Berovo": null, "Vinica": null, "Kochani": null, "M. Kamenica": null, "Pehchevo": null, "Probishtip": null, "Shtip": null, "Debar": null, "Kichevo": null, "Makedonski Brod": null, "Ohrid": null, "Struga": null, "Bogdanci": null, "Valandovo": null, "Gevgelija": null, "Dojran": null, "Radovish": null, "Strumica": null, "Bitola": null, "Demir Hisar": null, "Krushevo": null, "Prilep": null, "Resen": null, "Gostivar": null, "Tetovo": null, "Kratovo": null, "Kriva Palanka": null, "Kumanovo": null, "Mavrovo": null
        },
        limit: 5,
    });
    $('input.autocomplete-end').autocomplete({
        data: {
            "Skopje": null, "Veles": null, "Demir Kapija": null, "Kavadarci": null, "Negotino": null, "Sveti Nikole": null, "Berovo": null, "Vinica": null, "Kochani": null, "M. Kamenica": null, "Pehchevo": null, "Probishtip": null, "Shtip": null, "Debar": null, "Kichevo": null, "Makedonski Brod": null, "Ohrid": null, "Struga": null, "Bogdanci": null, "Valandovo": null, "Gevgelija": null, "Dojran": null, "Radovish": null, "Strumica": null, "Bitola": null, "Demir Hisar": null, "Krushevo": null, "Prilep": null, "Resen": null, "Gostivar": null, "Tetovo": null, "Kratovo": null, "Kriva Palanka": null, "Kumanovo": null, "Mavrovo": null,
        },
        limit: 5,
    });
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
});