import { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import Swal from "sweetalert2";

const GenericFunctions = () => {
    const { username } = useContext(AppContext);

    function DetectUser() {
        if (username == null) {
            Swal.fire({
                title: "Error",
                text: `Usuario inválido`,
                icon: 'error',
                confirmButtonText: 'Aceptar ',
                confirmButtonColor: '#4b64ca',
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {

                    window.location.href = '/'
                }
            })
        }
    }
    return { DetectUser }
}

export default GenericFunctions