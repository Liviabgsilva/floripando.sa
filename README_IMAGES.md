How to download hotel images locally

This project references hotel images under `img.hospedagem/` to keep assets local and avoid cross-origin issues.

To download the placeholder hotel images used by `DATA.hospedagem`:

1. Open PowerShell and change to the project root:

```powershell
cd "c:\Users\livia_bg_silva\Documents\GitHub\floripando.sa"
```

2. Run the provided script:

```powershell
.\tools\download_hotel_images.ps1
```

The script will create `img.hospedagem/` and download the images listed in the script. Running the script again will overwrite the files in `img.hospedagem/` (useful for refreshing images). If a download fails, the script will print a warning and continue.

After the images are downloaded, open `index.html` in your browser and go to the "Onde Ficar" page — images should be loaded from `img.hospedagem/`.
