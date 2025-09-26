// No arquivo src/components/Calculator.vue

<template>
    <v-container class="calculadora-container">
        <v-row class="v-row" justify="center" align="center">
            <v-col  cols="11" sm="8" md="4" lg="3">
                <v-card class="calculadora">
                    <!-- Display para mostrar a expressão e o resultado -->
                    <div class="display">
                        <h3>{{ equation || '0' }}</h3>
                        <h2>{{ result }}</h2>
                    </div>
                    <!-- Teclado da calculadora -->
                    <div class="teclado">
                        <v-btn class="botao operacao-c" @click="clear">C</v-btn>
                        <v-btn class="botao" @click="deleteLast">DEL</v-btn>
                        <v-btn class="botao" @click="addToEquation('/')">÷</v-btn>
                        <v-btn class="botao" @click="addToEquation('*')">×</v-btn>
                        <v-btn class="botao" @click="addToEquation('7')">7</v-btn>
                        <v-btn class="botao" @click="addToEquation('8')">8</v-btn>
                        <v-btn class="botao" @click="addToEquation('9')">9</v-btn>
                        <v-btn class="botao" @click="addToEquation('-')">-</v-btn>
                        <v-btn class="botao" @click="addToEquation('4')">4</v-btn>
                        <v-btn class="botao" @click="addToEquation('5')">5</v-btn>
                        <v-btn class="botao" @click="addToEquation('6')">6</v-btn>
                        <v-btn class="botao" @click="addToEquation('+')">+</v-btn>
                        <v-btn class="botao" @click="addToEquation('1')">1</v-btn>
                        <v-btn class="botao" @click="addToEquation('2')">2</v-btn>
                        <v-btn class="botao" @click="addToEquation('3')">3</v-btn>
                        <v-btn class="botao igual" @click="calculate" style="grid-row: span 2;">=</v-btn>
                        <v-btn class="botao" @click="addToEquation('0')" style="grid-column: span 2;">0</v-btn>
                        <v-btn class="botao" @click="addToEquation('.')">.</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// Exporta o componente Calculator para uso no Vue
export default {
    // Função que retorna o estado reativo do componente
    data() {
        return {
            // Armazena a expressão digitada pelo usuário
            equation: '',
            // Armazena o resultado do cálculo
            result: '',
        };
    },
    // Métodos do componente
    methods: {
        // Adiciona um valor (número ou operador) à expressão
        addToEquation(input) {
            // Limita a expressão a 16 caracteres
            if (this.equation.length < 16) {
                // Concatena o novo valor à expressão
                this.equation += input;
            }
        },
        // Limpa a expressão e o resultado
        clear() {
            this.equation = '';
            this.result = '';
        },
        // Remove o último caractere da expressão
        deleteLast() {
            this.equation = this.equation.slice(0, -1);
        },
        // Realiza o cálculo da expressão
        calculate() {
            try {
                // Se não houver expressão, limpa o resultado e retorna
                if (!this.equation) {
                    this.result = '';
                    return;
                }
                // Substitui os símbolos de multiplicação e divisão pelos operadores do JavaScript
                const expression = this.equation.replace(/×/g, '*').replace(/÷/g, '/');
                // Cria uma função dinâmica para avaliar a expressão matemática
                const evaluation = new Function('return ' + expression)();
                // Arredonda o resultado para 4 casas decimais e converte para número
                this.result = parseFloat(evaluation.toFixed(4));
            } catch (error) {
                // Se ocorrer erro na avaliação, exibe 'Erro' no resultado
                this.result = 'Erro';
            }
        },
    },
};
</script>

<style scoped>
/* Container principal da calculadora, centraliza na tela e aplica imagem de fundo */
.calculadora-container {
    display: flex; /* Flexbox para centralizar */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    width: 100vw; /* Ocupa toda a largura da tela */
    height: 100vh; /* Ocupa toda a altura da tela */
    background-image: url('../assets/images/mesa.png'); /* Imagem de fundo da mesa */
    background-size: cover; /* Cobre toda a área */
    background-position: center; /* Centraliza a imagem */
    border: none !important;
    box-shadow: none !important;
  
}

/* Caixa da calculadora */
.calculadora {
    width: 340px; /* Largura fixa */
    padding: 20px; /* Espaçamento interno */
     /*  Garante que nada "vaze" das bordas arredondadas */
    overflow: hidden; 
}

/* Título da calculadora */
.titulo {
    color: #4CAF50; /* Verde */
    text-align: center; /* Centralizado */
    font-family: 'Courier New', Courier, monospace; /* Fonte monoespaçada */
    margin-top: 0; /* Remove margem superior */
}

/* Display da calculadora */
.display {
    background-color: #3a3a3a; /* Fundo escuro */
    color: white; /* Texto branco */
    text-align: right; /* Alinha à direita */
    padding: 20px; /* Espaçamento interno */
    border-radius: 5px; /* Cantos arredondados */
    margin-bottom: 20px; /* Espaço abaixo do display */
    font-family: 'Courier New', Courier, monospace; /* Fonte monoespaçada */
    height: 80px; /* Altura fixa */
    overflow: hidden; /* Esconde conteúdo extra */
    word-wrap: break-word; /* Quebra linha se necessário */
    /* ajusta o tamanho do display */
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.3); /* Uma borda interna sutil */
}

/* Expressão digitada */
.display h3 {
    margin: 0; /* Remove margem */
    font-size: 1.5em; /* Tamanho da fonte */
    opacity: 0.7; /* Menos destaque */
    min-height: 28px; /* Altura mínima */
}

/* Resultado do cálculo */
.display h2 {
    margin: 0; /* Remove margem */
    font-size: 2em; /* Tamanho maior */
    min-height: 38px; /* Altura mínima */
    
}

/* Grade do teclado */
.teclado {
    display: grid; /* Usa grid para organizar os botões */
    grid-template-columns: repeat(4, 1fr); /* 4 colunas iguais */
    gap: 10px; /* Espaço entre os botões */
}

/* Estilo dos botões */
.botao {
    padding: 20px; /* Espaçamento interno */
    font-size: 1.5em; /* Tamanho da fonte */
    border: none; /* Sem borda */
    border-radius: 8px; /* Cantos arredondados */
    cursor: pointer; /* Cursor de mão */
    background-color: #505050; /* Fundo cinza escuro */
    color: white; /* Texto branco */
    transition: background-color 0.2s; /* Transição suave */
    /* centraliza o texto no botão */
    display: flex;
    justify-content: center;
    align-items: center;

     /* AJUSTE 5: Sombra sutil nos botões para profundidade, sem linhas pretas */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Efeito hover nos botões */
.botao:hover {
    background-color: #6a6a6a; /* Fundo mais claro ao passar o mouse */
}

/* Botão de limpar (C) */
.botao.operacao-c {
    background-color: #ff6347; /* Vermelho */
}

/* Hover do botão de limpar */
.botao.operacao-c:hover {
    background-color: #e55337; /* Vermelho mais escuro */
}

/* Botão de igual (=) */
.botao.igual {
    background-color: #4CAF50; /* Verde */
}

/* Hover do botão de igual */
.botao.igual:hover {
    background-color: #45a049; /* Verde mais escuro */
}

.v-row {
     margin: 0 !important;
}
</style>