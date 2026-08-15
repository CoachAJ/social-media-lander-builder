/**
 * Exports a rendered DOM node as a standalone, self-contained HTML file
 * (using the Tailwind CDN build so it works with zero build step, hosted anywhere).
 */
export function downloadStandaloneHtml(contentEl: HTMLElement, filename: string): void {
  const contentHtml = contentEl.outerHTML;

  const doc = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>90 For Life Landing Page</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'health-blue': '#0068B3',
          'blue-sky': '#3CAADF',
          'tangy-yellow': '#FFB81C',
          'glorious-sunset': '#F58A34',
          'hot-chocolate': '#784434',
        },
        fontFamily: {
          proxima: ['Poppins', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
        boxShadow: {
          soft: '0 4px 20px -2px rgba(0, 104, 179, 0.08)',
          'soft-lg': '0 12px 40px -4px rgba(0, 104, 179, 0.12)',
        },
      },
    },
  };
</script>
</head>
<body>
${contentHtml}
</body>
</html>`;

  const blob = new Blob([doc], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
