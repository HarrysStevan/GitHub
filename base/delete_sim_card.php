<?php
// Configurar los encabezados para permitir CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Manejar solicitud OPTIONS para CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Responder a la solicitud preflight
    header("HTTP/1.1 204 No Content");
    header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    exit();
}

// Verificar si el método es DELETE
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    include_once 'database.php';
    
    $database = new Database();
    $db = $database->getConnection();

    // Validar si el ID fue proporcionado
    $id = isset($_GET['id']) ? $_GET['id'] : die(json_encode(["success" => false, "message" => "ID no proporcionado"]));

    $query = "DELETE FROM sim_cards WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "SIM card eliminada correctamente"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error al eliminar la SIM card"]);
    }
} else {
    http_response_code(405); // Método no permitido
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
}
?>
