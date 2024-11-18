<?php
// Configuración de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Incluir archivo de conexión a la base de datos
include_once 'database.php';

$database = new Database();
$db = $database->getConnection();

// Si se proporciona un ID, obtenemos solo esa SIM card específica
if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $query = "SELECT * FROM sim_cards WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    $simCard = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($simCard ? $simCard : ["error" => "SIM card no encontrada"]);
} else {
    // Consultar todas las SIM cards si no se proporciona un ID
    $query = "SELECT * FROM sim_cards";
    $stmt = $db->prepare($query);
    $stmt->execute();

    $simCards = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($simCards ?: []);
}
?>