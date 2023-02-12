$(document).ready(function(){
    $("input#nu_cpfcnpj").inputmask({mask: ['999.999.999-99'], keepStatic: true});
    $("input#vl_movimentacao").maskMoney({
                            prefix: "R$",
                            decimal: ",",
                            thousands: "."
                        });
});


$(document).on("change","select#tp_pessoa", function(){

    $("input#nu_cpfcnpj").val("");

    var targetLabel = $("#lbl_nu_cpfcpnj");
    var selectedOptionLabel = $(this).children("option:selected")[0].label;

    //console.log(this);

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

//Evitando que a página seja atualizada quando o botão cadastrar for clicado
const form = document.getElementById("form_cadastro");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
});



window.onload = function() {
    document.getElementById("btn_cadastrar").addEventListener("click", function(event) {
        
        //console.log(moment("dt_movimentacao").format('L'));
        
        //setando variaveis para pegar os dados
        var vlr_CPF = document.getElementById("nu_cpfcnpj").value;
        var vlr_nome = document.getElementById("no_cliente").value;
        var vlr_produto = document.getElementById("no_produto").value;
        var vlr_dt_movimentacao = document.getElementById("dt_movimentacao").value;
        var vlr_vl_movimentacao = document.getElementById("vl_movimentacao").value;
        var vlr_detalhes_movimentacao = document.getElementById("txt_detalhes").value;

        //preenchendo o campo destino
        document.getElementById("nu_cpfcnpj_visualizacao").value = vlr_CPF;
        document.getElementById("no_cliente_visualizacao").value = vlr_nome;
        document.getElementById("no_produto_visualização").value = vlr_produto  ;
        document.getElementById("dt_movimentacao_visualização").value = vlr_dt_movimentacao;
        document.getElementById("vl_movimentacao_visualização").value = vlr_vl_movimentacao;
        document.getElementById("txt_detalhes_visualizacao").value = vlr_detalhes_movimentacao;
    })
};