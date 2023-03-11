const API = "https://api.themoviedb.org/3"
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjJmODc3ZmEzOTk2NDI4ZGU4MWQzODdmOTIzMjllMCIsInN1YiI6IjY0MGMwN2JjZmJhNjI1MDEwYWE5ZDIxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bs5L_1_ww6vyotAay__QWhlQKtgOLDVawmFsRn0RH2Q",
        "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
