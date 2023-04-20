const string="The quick brown fox jumps over the lazy dog"
const substring="brown"
if(string.includes(substring))
{
    console.log(`${string} contains the substring ${substring}`)
}
else
{
    console.log(`${string} does not contain the substring`)
}