import LogoCoffeeDelivery from '../assets/logo-coffee-delivery.svg';

export function Header() {
  return (
    <header>
      // logo
      <img src={LogoCoffeeDelivery} alt="" />
      <div>
        <div>
          <span>Rio de Janeiro, RJ</span>
        </div>
      </div>
    </header>
  )
}