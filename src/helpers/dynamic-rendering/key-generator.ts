import uniqId from 'uniqid';

/**
 * @function  keyGenerator => Key unique identifier generator.
 */
const  keyGenerator = () => uniqId.process();

export default keyGenerator;