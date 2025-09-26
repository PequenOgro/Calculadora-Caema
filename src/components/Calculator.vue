// No arquivo src/components/Calculator.vue

<template>
  <div class="calculadora-centralizada">
    <v-card class="calculadora">

      <h1 class="titulo">CALCULADORA CAEMA</h1>

      <div class="display">
        <h3>{{ equation || '0' }}</h3>
        <h2>{{ result }}</h2>
      </div>
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
  </div>
</template>

<script>
// O SCRIPT NÃO MUDA. O seu já está correto.
export default {
    data() {
        return {
            equation: '',
            result: '',
        };
    },
    methods: {
        addToEquation(input) {
            if (this.equation.length < 16) {
                this.equation += input;
            }
        },
        clear() {
            this.equation = '';
            this.result = '';
        },
        deleteLast() {
            this.equation = this.equation.slice(0, -1);
        },
        calculate() {
            try {
                if (!this.equation) {
                    this.result = '';
                    return;
                }
                const expression = this.equation.replace(/×/g, '*').replace(/÷/g, '/');
                const evaluation = new Function('return ' + expression)();
                this.result = parseFloat(evaluation.toFixed(4));
            } catch (error) {
                this.result = 'Erro';
            }
        },
    },
};
</script>

<style scoped>
/* ESTE É O SEU CSS. Mantive ele intacto, fazendo apenas o ajuste no teclado. */

/* Centraliza a calculadora na tela e aplica imagem de fundo diretamente no componente */
.calculadora-centralizada {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/blackboard-inscribed-with-scientific-formulas-calculations_1150-19413.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Caixa da calculadora (seu estilo original) */
.calculadora {
    width: 380px;
    padding: 20px;
    overflow: hidden; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #2c2c2c;
    border: 1px solid rgba(0, 0, 0, 0.3);
}

/* Título da calculadora (restaurado) */
.titulo {
    color: #4CAF50;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom: 15px; /* Adiciona um espaço abaixo do título */
}

/* Display da calculadora */
.display {
    background-color: #3a3a3a;
    color: white;
    text-align: right;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    font-family: 'Courier New', Courier, monospace;
    height: 80px;
    overflow: hidden;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
}

.display h3 {
    margin: 0;
    font-size: 1.5em;
    opacity: 0.7;
    min-height: 28px;
}

.display h2 {
    margin: 0;
    font-size: 2em;
    min-height: 38px;
}

/* Grade do teclado com a correção de 1 linha */
.teclado {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* Esta linha resolve o problema do botão de igual esticar o card */
    grid-template-rows: repeat(5, 1fr); 
    gap: 10px;
}

/* Estilo geral dos botões */
.botao {
    height: auto !important; /* Permite que o grid controle a altura */
    min-height: 60px; /* Altura mínima para os botões */
    border-radius: 8px;
    font-size: 1.2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.botao.operacao-c {
    background-color: #ff6347;
}

.botao.igual {
    background-color: #4CAF50;
    font-size: 1.5rem !important;
}
</style>