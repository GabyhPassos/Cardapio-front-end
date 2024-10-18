import { apiFetch } from "../../utils/apiFetch";

export const getApiMenus = async () => {
    return apiFetch({
        url: 'localhost:algo/menus/item',
        method: 'GET'
    })
}

export const getApiSubItems = async () => {
    return apiFetch({
        url: 'localhost:algo/menu/subitem',
        method: 'GET'
    })
}

export const registerItemMenu = async () => {
    return apiFetch({
        url: 'localhost:route/cad',
        method: 'POST'
    })
}


# Criação do cardápio
cardapio = {}

# Função para adicionar itens ao cardápio
def adicionar_item(nome, preco):
    cardapio[nome] = preco
    print(f"Item '{nome}' adicionado ao cardápio.")

# Função para exibir o cardápio completo
def exibir_cardapio():
    if cardapio:
        print("\n--- Cardápio ---")
        for item, preco in cardapio.items():
            print(f"{item}: R${preco:.2f}")
    else:
        print("O cardápio está vazio.")

# Exemplo de uso
adicionar_item("Pizza Margherita", 25.90)
adicionar_item("Hambúrguer", 15.00)
adicionar_item("Suco de Laranja", 7.50)

# Exibir o cardápio final
exibir_cardapio()






