$dirPath = Get-Location
$source = $dirPath.Path
$dest = $source+'\Package'
Remove-Item $dest -Recurse
$excludeKeywords = @('*.ts','*.ps1','package-lock.json','*.clip')
$exPath = @()
$exPath += Get-ChildItem $dest -Recurse
$excludeName = @()
$exPath += Get-ChildItem "$source\node_modules\@types\" -Recurse
$exPath += Get-ChildItem "$source\node_modules\@popperjs\" -Recurse
$exPath += Get-ChildItem "$source\node_modules\popper.js\" -Recurse
$exPath += Get-ChildItem "$source\node_modules\bootstrap\js\" -Recurse
$exPath += Get-ChildItem "$source\node_modules\bootstrap\dist\js\" -Recurse
$exPath += Get-ChildItem "$source\node_modules\bootstrap\scss\" -Recurse
$exPath += Get-ChildItem "$source\Release\" -Recurse
$exPath += Get-ChildItem "$source\ScreenShots\" -Recurse

foreach($p in $exPath){
    foreach($item in $p){
        $excludeName+=$item.FullName
    }
}

$temp = Get-ChildItem $source -Recurse -Exclude $excludeKeywords
# $temp
$toCopy=@()
foreach($elem in $temp){
    if($excludeName.Contains($elem.FullName)){
        continue
    }
    $toCopy+=$elem
}
$toCopy | Copy-Item -Destination {Join-Path $dest $_.FullName.Substring($source.length)}

# Get-ChildItem $source -Exclude $excludeKeywords | Copy-Item -Destination {Join-Path $dest $_.FullName.Substring($source.length)}
