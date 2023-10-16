import postSize from './post_size.js';
import interactionModal from './interaction_modals.js';
import registerFormValidation from './registerValidationForm.js';
import counterRender from './get_counters.js';

interactionModal();
registerFormValidation();
counterRender();

alert(postSize('Это новый пост'));
