// import Order from "./order/order";
import { Order } from './order/order.js';

export default function Footer(numPizzas) {
    let currentHour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;

    const checkShopStatus = currentHour >= openHour && currentHour <= closeHour;
    const isOpen = checkShopStatus ? "Open" : "Closed";

    if (!isOpen)
        return (
            <strong className="orderVisit">
                You can connect tomorrow from {openHour} to {closeHour}
            </strong>
        );

    return (
        <footer className="footer">
            {isOpen && (
                <Order isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
            )}
        </footer>
    );
}