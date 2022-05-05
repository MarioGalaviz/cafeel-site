import { Box, Grid, Typography } from "@mui/material";
import Nav from "../components/Nav";

export default function Privacidad() {
    const sectionStyle = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: '20vh',
        height: '50vh'
    }
    // height: 50vh;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-wrap: wrap;
    // background-color:#bcaaa4;
    // width: 100%;
    return(
        <div>
            <Nav />
            <Grid container style={sectionStyle} sx={{ backgroundColor: 'background.paper' }} justifyContent='center' alignItems='center' >
                    <Grid container justifyContent='center' >
                        <Grid item xs={10}>
                            <Box width="100%" height='11vh'/>
                            <Typography align='center' variant='h5' sx={{ fontWeight: 'bold' }}>
                                Tus datos están protegidos
                            </Typography>
                            
                        </Grid>
                    </Grid>
            </Grid>
            <Grid container justifyContent='center'>
                <Grid item xs={10} sx={{ mt: 3.8, mb:1.5 }} >
                    <Typography align='center' variant='h4' sx={{ fontWeight: 'bold' }}>Aviso de privacidad integral</Typography>
                </Grid>
                <Grid item xs={10} sx={{ my: 2 }} >
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Mario Alberto Galaviz García mejor conocido como Tacool, con domicilio en Turmalina 376, Colinas de San Javier, Lagos de Moreno, Jalisco, México y portal de internet www.tacool.mx, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</Typography>
                <Typography variant='body1' sx={{ my: 1.8, fontWeight: 'bold' }} width={'100%'} align='justify'>¿Para qué fines utilizaremos sus datos personales?</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Respuesta a mensajes del formulario de contacto, prestación de cualquier servicio solicitado</Typography>
                <Typography variant='body1' sx={{ my: 1.8, fontWeight: 'bold' }} width={'100%'} align='justify'>¿Qué datos personales utilizaremos para estos fines?</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales: datos de identificación y contacto, información sobre la operación de su lavandería</Typography>
                <Typography variant='body1' sx={{ my: 1.8, fontWeight: 'bold' }} width={'100%'} align='justify'>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento?</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a mga.375@gmail.com y deberá contener:</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>- Nombre completo del titular</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>- Domicilio</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>- Teléfono</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>- Correo electrónico usado en este sitio web</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>- Copia de una identificación oficial adjunta</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>- Asunto «Derechos ARCO»</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Le daremos respuesta a solicitud en máximo 20 días. Le comunicaremos la respuesta al mismo correo electrónico de donde se envió la petición.</Typography>
                <Typography variant='body1' sx={{ my: 1.8, fontWeight: 'bold' }} width={'100%'} align='justify'>El uso de tecnologías de rastreo en nuestro portal de internet</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Identificadores, nombre de usuario y contraseñas de sesión, Idioma preferido por el usuario, Región en la que se encuentra el usuario, Tipo de navegador del usuario, Tipo de sistema operativo del usuario, Fecha y hora del inicio y final de una sesión de un usuario</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web.</Typography>
                <Typography variant='body1' sx={{ my: 1.8, fontWeight: 'bold' }} width={'100%'} align='justify'>¿Cómo puede conocer los cambios en este aviso de privacidad?</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web www.tacool.mx .</Typography>
                <Typography variant='body1' sx={{ my: 1.8}} width={'100%'} align='justify'>Última actualización de este aviso de privacidad: 28/04/2022</Typography>
    
                </Grid>
            </Grid>
            
    
        </div>
        )
}
