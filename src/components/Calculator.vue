// No arquivo src/components/Calculator.vue

<template>
    <!-- Container principal da calculadora -->
    <div class="calculadora-container">
        <!-- Estrutura da calculadora -->
        <div class="calculadora">
            <!-- Título da calculadora -->
            <h1 class="titulo">RB-420C</h1>
            <!-- Display para mostrar a expressão e o resultado -->
            <div class="display">
                <!-- Mostra a expressão digitada ou 0 se estiver vazio -->
                <h3>{{ equation || '0' }}</h3>
                <!-- Mostra o resultado do cálculo -->
                <h2>{{ result }}</h2>
            </div>
            <!-- Teclado da calculadora -->
            <div class="teclado">
                <!-- Botão para limpar tudo -->
                <button class="botao operacao-c" @click="clear">C</button>
                <!-- Botão para apagar o último caractere -->
                <button class="botao" @click="deleteLast">DEL</button>
                <!-- Botão para divisão -->
                <button class="botao" @click="addToEquation('/')">÷</button>
                <!-- Botão para multiplicação -->
                <button class="botao" @click="addToEquation('*')">×</button>

                <!-- Botões numéricos -->
                <button class="botao" @click="addToEquation('7')">7</button>
                <button class="botao" @click="addToEquation('8')">8</button>
                <button class="botao" @click="addToEquation('9')">9</button>
                <!-- Botão para subtração -->
                <button class="botao" @click="addToEquation('-')">-</button>

                <button class="botao" @click="addToEquation('4')">4</button>
                <button class="botao" @click="addToEquation('5')">5</button>
                <button class="botao" @click="addToEquation('6')">6</button>
                <!-- Botão para adição -->
                <button class="botao" @click="addToEquation('+')">+</button>

                <button class="botao" @click="addToEquation('1')">1</button>
                <button class="botao" @click="addToEquation('2')">2</button>
                <button class="botao" @click="addToEquation('3')">3</button>
                <!-- Botão de igual para calcular -->
                <button class="botao igual" @click="calculate" style="grid-row: span 2;">=</button>

                <!-- Botão zero ocupa duas colunas -->
                <button class="botao" @click="addToEquation('0')" style="grid-column: span 2;">0</button>
                <!-- Botão para ponto decimal -->
                <button class="botao" @click="addToEquation('.')">.</button>
            </div>
        </div>
    </div>
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
}

/* Caixa da calculadora */
.calculadora {
    width: 340px; /* Largura fixa */
    background-color: rgba(45, 45, 45, 0.9); /* Fundo escuro com transparência */
    backdrop-filter: blur(5px); /* Efeito de desfoque */
    border-radius: 10px; /* Cantos arredondados */
    padding: 20px; /* Espaçamento interno */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4); /* Sombra */
    border: 1px solid rgba(255, 255, 255, 0.1); /* Borda sutil */
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
    border-radius: 5px; /* Cantos arredondados */
    cursor: pointer; /* Cursor de mão */
    background-color: #505050; /* Fundo cinza escuro */
    color: white; /* Texto branco */
    transition: background-color 0.2s; /* Transição suave */
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
</style>