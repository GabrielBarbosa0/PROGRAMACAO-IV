import os

def escrever_estrutura_em_txt(diretorio_raiz, arquivo_saida):
    with open(arquivo_saida, 'w', encoding='utf-8') as f:
        def listar_pasta(caminho, prefixo=''):
            itens = sorted(os.listdir(caminho))
            total = len(itens)
            for i, item in enumerate(itens):
                caminho_completo = os.path.join(caminho, item)
                conector = '└── ' if i == total - 1 else '├── '
                f.write(f"{prefixo}{conector}{item}\n")
                if os.path.isdir(caminho_completo):
                    extensao = '    ' if i == total - 1 else '│   '
                    listar_pasta(caminho_completo, prefixo + extensao)

        nome_pasta = os.path.basename(os.path.abspath(diretorio_raiz))
        f.write(f"{nome_pasta}/\n")
        listar_pasta(diretorio_raiz)

diretorio = diretorio = r'C:\Users\barbo\Downloads\REPOSITORIOS-GITHUB\PROGRAMACAO-IV\Introdução-ao-React\my-app'
saida = 'estrutura_pasta.txt'
escrever_estrutura_em_txt(diretorio, saida)
print(f"Estrutura salva em: {saida}")
