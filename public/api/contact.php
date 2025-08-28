<?php
// Allow CORS for flexibility (same-origin will also work)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  header('Content-Type: application/json');
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

// Read raw JSON body
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

// Basic validation
$required = ['firstName', 'lastName', 'email', 'tel'];
foreach ($required as $field) {
  if (!isset($data[$field]) || $data[$field] === '') {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Missing required fields']);
    exit;
  }
}

// Add timestamp
$data['timestamp'] = gmdate('c');

// Prepare storage path (contacts.json in same directory)
$storageDir = __DIR__ . DIRECTORY_SEPARATOR;
$storageFile = $storageDir . 'contacts.json';

// Ensure directory is writable
if (!is_writable($storageDir)) {
  http_response_code(500);
  header('Content-Type: application/json');
  echo json_encode(['error' => 'Storage directory is not writable']);
  exit;
}

// Read existing contacts
$contacts = [];
if (file_exists($storageFile)) {
  $existing = file_get_contents($storageFile);
  if ($existing !== false && strlen($existing) > 0) {
    $decoded = json_decode($existing, true);
    if (is_array($decoded)) {
      $contacts = $decoded;
    }
  }
}

// Append new contact and write back
$contacts[] = $data;
$written = file_put_contents($storageFile, json_encode($contacts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

if ($written === false) {
  http_response_code(500);
  header('Content-Type: application/json');
  echo json_encode(['error' => 'Failed to write data']);
  exit;
}

header('Content-Type: application/json');
http_response_code(200);
echo json_encode(['success' => true]);
