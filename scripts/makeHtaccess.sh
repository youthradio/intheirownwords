if [ $# -ne 1 ]
then
    echo "Needs the Project URL handle as parameter makeHtaccess 'URLhandle' "
    exit 1
fi

echo "<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /$1
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>" >  .htaccess

echo ".htaccess file created with success, using $1 URL handle"
