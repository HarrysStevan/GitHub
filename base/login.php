<?php
// Configuración de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Incluir archivo de conexión a la base de datos
include_once 'database.php';

$database = new Database();
$db = $database->getConnection();

// Obtener y decodificar los datos de la solicitud
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->email) && !empty($data->password)) {
    $email = htmlspecialchars(strip_tags($data->email));
    $password = htmlspecialchars(strip_tags($data->password));

    // Consulta para verificar el usuario
    $query = "SELECT * FROM usuarios WHERE email = :email";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verificar la contraseña sin hash
        if ($password === $user['password']) {
            echo json_encode([
                "success" => true,
                "userRole" => isset($user['rol']) ? $user['rol'] : null, // Manejo de la clave 'rol'
                "userId" => $user['id']
            ]);
        } else {
            echo json_encode(["success" => false, "message" => "Credenciales incorrectas"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Usuario no encontrado"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Datos incompletos"]);
}
