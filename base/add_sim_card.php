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

if (!empty($data->iccid) && !empty($data->operador)) {
    // Insertar la nueva SIM card
    $query = "INSERT INTO sim_cards (iccid, operador) VALUES (:iccid, :operador)";
    $stmt = $db->prepare($query);

    $stmt->bindParam(':iccid', $data->iccid);
    $stmt->bindParam(':operador', $data->operador);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "SIM card agregada correctamente"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error al agregar la SIM card"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Datos incompletos"]);
}
?>