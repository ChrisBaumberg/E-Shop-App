import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function showNotifications(message, theme ){
    //confirm change (added todo, deleted todo or toggled todo)in DB
    Toastify({
        text: message,
        duration: 4000,
        gravity: "top",
        close: true,
        position: "right",
        style: {
            background: theme ==="normal"?"black":"red",
            color: theme === "normal" ?"white":"black",
        },
    }

    ).showToast()
    //show message
}

