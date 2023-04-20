package main

import (
	"fmt"
	"os"

	"github.com/alecthomas/chroma/quick"
)

func main() {
	// Open a file for writing the highlighted output
	outputFile, err := os.Create("output.html")
	if err != nil {
		fmt.Println("Error creating output file:", err)
		return
	}
	defer outputFile.Close()

	code := `
	package main

	import (
		"fmt"
		"os"
	
		"github.com/alecthomas/chroma"
		"github.com/alecthomas/chroma/quick"
		"github.com/alecthomas/chroma/formatters/html"
		"github.com/alecthomas/chroma/lexers"
	)
	
	func main() {
		// Create a lexer for Go code
		lexer := lexers.Get("go")
	
		// Create a formatter for HTML output
		formatter := html.New(html.WithClasses(true))
	
		// Open a file for writing the highlighted output
		outputFile, err := os.Create("output.html")
		if err != nil {
			fmt.Println("Error creating output file:", err)
			return
		}
		defer outputFile.Close()
	
		// Use the Quick function to highlight the input file and write the output to the file
		err = quick.Highlight(outputFile, "example.go", "go", "html", "monokai")
		if err != nil {
			fmt.Println("Error highlighting file:", err)
			return
		}
	}
	`

	// Use the Quick function to highlight the input file and write the output to the file
	err = quick.Highlight(outputFile, code, "go", "html", "monokai")
	if err != nil {
		fmt.Println("Error highlighting file:", err)
		return
	}
}
