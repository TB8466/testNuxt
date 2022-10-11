<template>
    <div>
        <h1>Velkommen til admin</h1>
        <p>Har du lavet et nyt blog post?</p>
        <p>Venligst udfyld formen:</p>

        <form>
            <label for="name">Overskrift:</label>
            <input type="text" name="name">
            <label for="url">Filnavn:</label>
            <input type="text" name="url">
            <label for="img">Sti til Thumbnail:</label>
            <input type="text" name="img">
            <label for="author">Forfatter:</label>
            <input type="text" name="author">
            <label for="date">dato (ikke nødvendigt)</label>
            <input type="date" name="date">
            <label for="preview">Først paragraf</label>
            <input type="text" name="preview">
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>