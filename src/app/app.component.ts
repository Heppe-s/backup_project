import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { invoke } from "@tauri-apps/api/tauri";
import { BaseDirectory, readDir } from "@tauri-apps/api/fs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  greetingMessage = "";

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }

  async test() {
    console.log("testado");
    console.log(
      await readDir(".minecraft\\saves", {
        dir: BaseDirectory.Data,
        recursive: true,
      })
    );
  }

  importarNuvem() {
    // Lógica para importar documento da nuvem
    console.log("Importando documento da nuvem");
    // exibirInfoArquivo("Arquivo em uso: ArquivoImportado.txt");
  }

  exportarNuvem() {
    // Lógica para exportar documento para a nuvem
    console.log("Exportando documento para a nuvem");
    // exibirInfoArquivo("Arquivo em uso: ArquivoExportado.txt");
  }

  importarLocal() {
    // Lógica para importar documento local
    console.log("Importando documento local");

    // const nomeArquivo =
    //   document.getElementById("fileName").value || "Nenhum arquivo selecionado";
    // exibirInfoArquivo(`Arquivo em uso: ${nomeArquivo}`);
  }

  exportarLocal() {
    // Lógica para exportar documento local
    console.log("Exportando documento local");
    const fileName = document.getElementById("fileName") as HTMLInputElement;
    const nomeArquivo = fileName.value || "Nenhum arquivo selecionado";
    this.exibirInfoArquivo(`Arquivo em uso: ${nomeArquivo}`);
  }

  exibirInfoArquivo(info: string) {
    const fileInfo = document.getElementById("fileInfo");
    if (!fileInfo) return;
    fileInfo.innerText = info;
  }
}
