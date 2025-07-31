"use client"

import { useEffect } from "react"

export function Comments({ slug }: { slug: string }) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://giscus.app/client.js"
    script.setAttribute("data-repo", "yourusername/yourrepo") // Replace this
    script.setAttribute("data-repo-id", "YOUR_REPO_ID")
    script.setAttribute("data-category", "General")
    script.setAttribute("data-category-id", "YOUR_CATEGORY_ID")
    script.setAttribute("data-mapping", "pathname")
    script.setAttribute("data-reactions-enabled", "1")
    script.setAttribute("data-emit-metadata", "0")
    script.setAttribute("data-theme", "light")
    script.setAttribute("crossorigin", "anonymous")
    script.async = true
    document.getElementById("comments")?.appendChild(script)
  }, [slug])

  return <div id="comments" className="mt-12" />
}
