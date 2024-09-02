// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// Enable the use of attributes on expressions and statements
#![feature(stmt_expr_attributes)]

fn main() {
  // initialize the plugin as early as possible
  #[cfg(debug_assertions)]
  let devtools = tauri_plugin_devtools::init();

  let mut builder = tauri::Builder::default();

  // the register it with Tauri
  #[cfg(debug_assertions)]
  builder = builder.plugin(devtools);

  builder.run(tauri::generate_context!())
      .expect("error while running tauri application");
}
