import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 12.000,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>12/09/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 49,90
                </PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>10/09/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}