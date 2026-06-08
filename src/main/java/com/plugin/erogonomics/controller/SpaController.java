package com.plugin.erogonomics.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SpaController {

    // Forward SPA routes to index.html so BrowserRouter works on direct URL access / refresh.
    // Matches a single dotless path segment (e.g. /about, /services), so requests for static
    // assets like /components/App.js fall through to the resource handler.
    @GetMapping(value = "/{path:[^\\.]*}")
    public String index() {
        return "forward:/index.html";
    }
}