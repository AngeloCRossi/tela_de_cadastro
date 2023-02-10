$(document).ready(function(){
    $("input#nu_cpfcnpj").inputmask({mask: ['999.999.999-99'], keepStatic: true});
});


$(document).on("change","select#tp_pessoa", function(){

    $("input#nu_cpfcnpj").val("");

    var targetLabel = $("#lbl_nu_cpfcpnj");
    var selectedOptionLabel = $(this).children("option:selected")[0].label;

    console.log(this);

    //Agora vou alterar o label do campo CPF/CNPJ e habilitar ou desabilitar o input
    switch(selectedOptionLabel){
        case '':
            $("input#nu_cpfcnpj").attr("disabled","disabled");
            selectedOptionLabel = "Selecione CPF ou CNPJ"
        break;

        default:
            $("#nu_cpfcnpj").removeAttr("disabled");

            if (selectedOptionLabel === "CPF"){
                $("input#nu_cpfcnpj").inputmask({mask: ['999.999.999-99'], keepStatic: true});
            }
            if (selectedOptionLabel === "CNPJ"){
                $("input#nu_cpfcnpj").inputmask({mask: ['99.999.999/9999-99'], keepStatic: true});
            }

    }
    $(targetLabel).text(selectedOptionLabel);


})