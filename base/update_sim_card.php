<?php
// Configuración de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Incluir archivo de conexión a la base de datos
include_once 'database.php';

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id) && !empty($data->iccid) && !empty($data->operador)) {
    $query = "UPDATE sim_cards SET iccid = :iccid, operador = :operador WHERE id = :id";
    $stmt = $db->prepare($query);

    $stmt->bindParam(':id', $data->id);
    $stmt->bindParam(':iccid', $data->iccid);
    $stmt->bindParam(':operador', $data->operador);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "SIM card actualizada correctamente"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error al actualizar la SIM card"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Datos incompletos"]);
}
?>