<!DOCTYPE html>
<html>
<head>
<title>Browser Information</title>
</head>
<body>

<h1>Browser Information</h1>
<p> The <strong>navigator</strong> object contains the following infromation about the browser you are using:</p>

<script type="text/javascript">
document.write("<ul>");
document.write("<li><strong>Code Name:</strong> " + navigator.appCodeName);
document.write("<li><strong>App Name:</strong>" + navigator.appName);
document.write("<li><strong>App Version:</strong>" + navigator.appVersion);
document.write("<li><strong>User Agent:</strong>" + navigator.userAgent);
document.write("<li><strong>Language:</strong>" + navigator.language);
document.write("<li><strong>Platform:</strong>" + navigator.platform);
document.write("</ul>");
</script>

</body>
</html>
