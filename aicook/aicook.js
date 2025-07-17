class AICookApp{
    constructor(){
        this.apikey = localStorage.getItem('geminiApiKey') || '';
        
        this.initializeElements();
        
        this.bindevents();

        this.loadApiKey();
    }

   
    initializeElements(){
        this.apikey = document.getElementById('api-Key')
        this.saveApiKeyBtn = document.getElementById();
        this.ingredientsInput = document.getElementById();
        this.dietarySelect = document.getElementById();
        this.cuisineSelect = document.getElementById();
        this.generateBtn = document.getElementById();
        this.loading = document.getElementById();
        this.recipeSection = document.getElementById();
        this.recipeContent = document.getElementById();
    }

bindEvents(){
    this.saveApiKeyBtn.addEventListener('click', ())
}


saveApiKey(){
    const apikey= this.apiKeyInput.value.trim();
    if(apikey){
        localStorage.setItem('geminiApiKey', apiKey);
        this.apiKey= apikey;
        this.updateApiKeystatus(true);
        this.showSuccess('API Key saved Successfully!');
    }
    else{
        this.showError('Please enter a valid API Key.');
    }
}

updateApiKeystatus(isValid){
    const btn = this.saveApiKeyBtn;
    if(isvalid){
        btn.textContent = 'Saved';
    }
    else{
        btn.textContent = 'Save'
        btn.style.background='#dc3545';
    }
}

async callGeminiAPI(ingredients){
    const dietary = this.dietarySelect.value;
    const cuisine = this.cuisineSelect.value;
    
    let prompt = `Create a detailed recipe using these ingredients: ${ingredients}.`;
    if (dietary){
        prompt += `makre sure my dietary preference is ${dietary}.`;
    }
    if (cuisine){
        prompt += `Cuisine type should be: ${cuisine}`
    }
    
}

if (!response.ok){
    
}
}