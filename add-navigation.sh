#!/bin/bash

# Script to add navigation to all HTML pages
# This helps ensure consistent navigation across all pages

echo "Adding navigation to HTML pages..."

# List of pages to update (excluding index.html and 404.html)
pages=(
    "stop-going-broke-on-cloud-storage.html"
    "storage-tax-elimination.html"
    "unified-architecture.html"
    "kill-protocol-wall.html"
    "file-services-comparison.html"
)

for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        echo "Processing $page..."
        
        # Check if navigation.js is already included
        if grep -q "navigation.js" "$page"; then
            echo "  ✓ Navigation already present in $page"
        else
            echo "  → Adding navigation to $page"
            # This is a placeholder - actual implementation would use sed or similar
        fi
    else
        echo "  ✗ File $page not found"
    fi
done

echo "Done!"
