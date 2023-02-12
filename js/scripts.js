$(document).ready(function(){
    $("input#nu_cpfcnpj").inputmask({mask: ['999.999.999-99'], keepStatic: true});
    $("input#vl_movimentacao").inputmask({mask: ['R$ 999.999,00'], keepStatic: false});
    dt_movimentacao
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


document.getElementById("btn_cadastrar").addEventListener("click",function() {
    var valor_CPF = document.getElementById("input#nu_cpfcnpj").value;
    var valor_nome = document.getElementById("input#no_cliente").value;
    var valor_produto = document.getElementById("select#no_produto").name;
    document.getElementById("nu_cpfcnpj_visualização").value = valor_CPF;




})