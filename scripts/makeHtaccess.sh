if [ $# -ne 1 ]
then
    echo "Needs the Project URL handle as parameter makeHtaccess 'URLhandle' "
    exit 1
fi

echo "<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  RewriteBase /$1/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /$1/index.html [L]
</IfModule>" >  .htaccess

echo ".htaccess file created with success, using $1 URL handle"
