const a="/build/assets/bg-3-CCqaJ6Y4.jpeg",n="/build/assets/bg-6-Dqb5Pipw.jpeg",p=[{title:"Laporan",price:15e4,description:`Pengerjaan laporan
Free konsultasi
Free revisi laporan`,bg:a},{title:"Aplikasi",price:1e6,description:`Pengerjaan aplikasi
Free konsultasi
Free revisi aplikasi`,bg:a},{title:"Laporan + Aplikasi",price:15e5,description:`Pengerjaan laporan full bab
Pengerjaan aplikasi
Free konsultasi
Free revisi aplikasi
Free revisi laporan`,bg:n}],l=[{title:"Laporan",price:2e5,description:`Pengerjaan laporan
Free konsultasi
Free revisi laporan`,bg:a},{title:"Aplikasi",price:3e6,description:`Pengerjaan aplikasi
Free konsultasi
Free revisi aplikasi`,bg:a},{title:"Laporan + Aplikasi",price:35e5,description:`Pengerjaan laporan full bab
Pengerjaan aplikasi
Free konsultasi
Free revisi aplikasi
Free revisi laporan`,bg:n}],g=i=>"Rp"+i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),c=i=>{const e=new Date(i),r={year:"numeric",month:"long",day:"numeric"},t=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0"),o=String(e.getSeconds()).padStart(2,"0");return e.toLocaleDateString("id-ID",r)+` ${t}:${s}:${o}`};export{p as P,l as a,c as b,g as f};
