import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/tauri";


function importarNuvem() {
    // Lógica para importar documento da nuvem
    console.log("Importando documento da nuvem");
    exibirInfoArquivo("Arquivo em uso: ArquivoImportado.txt");
}

function exportarNuvem() {
    // Lógica para exportar documento para a nuvem
    console.log("Exportando documento para a nuvem");
    exibirInfoArquivo("Arquivo em uso: ArquivoExportado.txt");
}

function importarLocal() {
    // Lógica para importar documento local
    console.log("Importando documento local");
    const nomeArquivo = document.getElementById('fileName').value || "Nenhum arquivo selecionado";
    exibirInfoArquivo(`Arquivo em uso: ${nomeArquivo}`);
}

function exportarLocal() {
    // Lógica para exportar documento local
    console.log("Exportando documento local");
    const nomeArquivo = document.getElementById('fileName').value || "Nenhum arquivo selecionado";
    exibirInfoArquivo(`Arquivo em uso: ${nomeArquivo}`);
}

function exibirInfoArquivo(info) {
    document.getElementById('fileInfo').innerText = info;
}
